import { IPlayerSymbol } from './../../types/game.type';

export interface IGameContextProps {
  isInRoom: boolean;
  setInRoom: (inRoom: boolean) => void;
  playerSymbol: IPlayerSymbol;
  setPlayerSymbol: (symbol: IPlayerSymbol) => void;
  isPlayerTurn: boolean;
  setPlayerTurn: (turn: boolean) => void;
  isGameStarted: boolean;
  setGameStarted: (start: boolean) => void;
}

export interface IStartGame {
  start: boolean;
  symbol: IPlayerSymbol;
}