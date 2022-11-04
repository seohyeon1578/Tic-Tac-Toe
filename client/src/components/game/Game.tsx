import React, { useCallback, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import gameService from "../../services/gameService";
import socketService from "../../services/socketService";
import { gameState } from "../../store/game/gameState";
import { symbolState } from "../../store/game/symbolState";
import { turnState } from "../../store/game/turnState";
import { gameStarted } from "../../store/game/gameStarted";
import { IMatrix } from "../../type/interfaces/cell";
import { IPlayMatrix } from "../../type/types/game.type";
import Cell from "../cell";
import Score from "./score/Score";
import * as G from './Game.style';

interface IWinner {
  winLine?: any;
  winner?: string;
  notWin?: boolean; 
}

const Game = () => {
  const [matrix, setMatrix] = useState<IPlayMatrix>(Array(9).fill(""));
  const [nodes, setNodes] = useState<{[key: number]: any}>({});
  const [winLine, setWinLine] = useState([]);
  
  const [gameWin, setGameWin] = useRecoilState(gameState);
  const [playerSymbol, setPlayerSymbol] = useRecoilState(symbolState);
  const [isPlayerTurn, setPlayerTurn] = useRecoilState(turnState)
  const [isGameStarted, setGameStarted] = useRecoilState(gameStarted)
  
  const gameReset = () => {
    setWinLine([])
    setMatrix(Array(9).fill(""));
  }

  const getAvailableMoves = (board: string[]) => {
    const moves: number[] = [];
    board.forEach((cell, index) => {
      if (!cell) moves.push(index);
    });
    return moves;
  };

  const handleClick = (id: number) => {
    if (
      isTerminal(matrix).winner === "X" ||
      isTerminal(matrix).winner === "O" ||
      isFull(matrix)
    ) {
      gameReset();
      return;
    }

    if (matrix[id] !== "") return;

    if (socketService.socket) {
      let editedBoard = [...matrix];
      console.log(playerSymbol)
      editedBoard[id] = playerSymbol;

      setMatrix(editedBoard);
      gameService.updateGame(socketService.socket, editedBoard);
      if (isTerminal(editedBoard).winner === playerSymbol) {
        const symbol = playerSymbol.toLowerCase()
        gameService.gameWin(socketService.socket, symbol);
        setWinLine(isTerminal(editedBoard).winLine);
        setGameWin((prev) => ({...prev, [symbol]: prev[symbol] + 1}))
        return;
      }
      if (isTerminal(editedBoard).winner === "draw") {
        gameService.gameWin(socketService.socket, "draw");
        setGameWin((prev) => ({...prev, draw: prev.draw + 1}))
      }
      setPlayerTurn(false);
    } else {
      let editedBoard = [...matrix];
      editedBoard[id] = "X";

      setMatrix(editedBoard);
      if (isTerminal(editedBoard).winner === "X") {
        setWinLine(isTerminal(editedBoard).winLine);
        setGameWin((prev) => ({...prev, x: prev.x + 1}))
        return;
      }
  
      let randomNumber = getBestMove(editedBoard, 0, false);
      if (editedBoard[randomNumber] === "") {
        editedBoard[randomNumber] = "O";
      }
      
      setMatrix(editedBoard);
  
  
      if (isTerminal(editedBoard).winner === "O") {
        setWinLine(isTerminal(editedBoard).winLine);
        setGameWin((prev) => ({...prev, o: prev.o + 1}))
        return;
      }
  
      if (isTerminal(editedBoard).winner === "draw") {
        setGameWin((prev) => ({...prev, draw: prev.draw + 1}))
      }
    }
  };

  const isEmpty = (board: string[]) => {
    return board.every((cell) => !cell);
  };

  const isFull = (board: string[]) => {
    return board.every((cell) => cell);
  };

  const isTerminal = useCallback((board: string[]): IWinner => {
    if (isEmpty(board)) return { notWin: false};

    if (board[0] === board[1] && board[0] === board[2] && board[0]) {
      return { winner: board[0], winLine: [0, 1, 2] };
    }
    if (board[3] === board[4] && board[3] === board[5] && board[3]) {
      return { winner: board[3], winLine: [3, 4, 5] };
    }
    if (board[6] === board[7] && board[6] === board[8] && board[6]) {
      return { winner: board[6], winLine: [6, 7, 8] };
    }

    if (board[0] === board[3] && board[0] === board[6] && board[0]) {
      return { winner: board[0], winLine: [0, 3, 6] };
    }
    if (board[1] === board[4] && board[1] === board[7] && board[1]) {
      return { winner: board[1], winLine: [1, 4, 7] };
    }
    if (board[2] === board[5] && board[2] === board[8] && board[2]) {
      return { winner: board[2], winLine: [2, 5, 8] };
    }

    if (board[0] === board[4] && board[0] === board[8] && board[0]) {
      return { winner: board[0], winLine: [0, 4, 8] };
    }
    if (board[2] === board[4] && board[2] === board[6] && board[2]) {
      return { winner: board[2], winLine: [2, 4, 6] };
    }

    if (isFull(board)) {
      return { winner: "draw" };
    }

    return { notWin :false };
  }, []);

  const getBestMove = (newBoard: string[], depth: number, isMax: boolean, callback?: (returnValue?: any) => void) => {
    if (depth === 0) setNodes({});

    if (isTerminal(newBoard).notWin || isTerminal(newBoard).winner || depth === -1) {
      if (isTerminal(newBoard).winner === "X") {
        return 100 - depth;
      } else if (isTerminal(newBoard).winner === "O") {
        return -100 + depth;
      }
      return 0;
    }

    if (isMax) {
      let best = -100;

      getAvailableMoves(newBoard).forEach((index) => {
        let child = [...newBoard];
        child[index] = "X";

        let score = getBestMove(child, depth + 1, false, callback);
        best = Math.max(best, score);
      });

      return best;
    }

    if (!isMax) {
      let best = 100;

      getAvailableMoves(newBoard).forEach((index) => {
        let child = [...newBoard];
        child[index] = "O";

        let score = getBestMove(child, depth + 1, true, callback);
        best = Math.min(best, score);

        if (depth === 0) {
          console.log(nodes);
          const moves = nodes[score] ? `${nodes[score]},${index}` : index;
          nodes[score] = moves;
        }
      });
      if (depth === 0) {
        let returnValue;

        if (typeof nodes[best] === "string") {
          const arr = nodes[best].split(",");
          const rand = Math.floor(Math.random() * arr.length);
          returnValue = arr[rand];
        } else {
          returnValue = nodes[best];
        }

        if(callback){
          callback(returnValue);
        }
        return returnValue;
      }
      return best;
    }
  };

  /** 상대편, 소켓에서 넘어온 상태로 현재 상태를 변경하는 함수 */
  const handleGameUpdate = useCallback(() => {
    if (socketService.socket)
      gameService.onGameUpdate(socketService.socket, (newMatrix) => {
        setMatrix(newMatrix);
        setPlayerTurn(true);
      });
  }, [setPlayerTurn]);

  /** 상대편이 들어왔으면 게임을 시작시키는 함수 */
  const handleStartGame = useCallback(() => {
    if (socketService.socket)
      gameService.onStartGame(socketService.socket, (options) => {
        setGameStarted(true);
        setPlayerSymbol(options.symbol);
        if (options.start) setPlayerTurn(true);
        else setPlayerTurn(false);
      });
  }, [setGameStarted, setPlayerSymbol, setPlayerTurn]);

  /** 이긴사람 확인하는 함수 */
  const handleGameWin = useCallback(() => {
    if (socketService.socket)
      gameService.onGameWin(socketService.socket, (message) => {
        setPlayerTurn(false);
        if(message === "draw"){
          setGameWin((prev) => ({...prev, draw: prev.draw + 1}))
        }else {
          console.log(message)
          setGameWin((prev) => ({...prev, [message]: prev[message] + 1}))
        }
      });
  }, [setGameWin, setPlayerTurn]);

  useEffect(() => {
    handleGameUpdate();
    handleStartGame();
    handleGameWin();  
  }, [handleGameUpdate, handleStartGame, handleGameWin]);
  
  return (
    <G.GameContainer>
      {/* {!isGameStarted && <h2>기다려!</h2>}
      {(!isGameStarted || !isPlayerTurn) && <h2>상대턴</h2>} */}
      {matrix.map((val, idx) => (
        <Cell 
          key={idx}
          id={idx}
          value={val}
          handleClick={handleClick}
        />
      ))}
      <Score />
    </G.GameContainer>
  );
}

export default Game;