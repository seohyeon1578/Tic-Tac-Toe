import { Socket } from 'socket.io-client';
import { IStartGame } from '../../type/interfaces/game';
import { IPlayMatrix } from '../../type/types/game.type';

export const joinGameRoom = async(socket: Socket, roomId: string): Promise<boolean> => {
  return new Promise((res, rej) => {
    socket.emit("join_game", { roomId });
    socket.on("room_joined", () => res(true));
    socket.on("room_join_error", ({ error }) => rej(error));
  })
};

export const updateGame = async(socket: Socket, gameMatrix: IPlayMatrix) => {
  socket.emit("update_game", { matrix: gameMatrix});
};

export const onGameUpdate = async(socket: Socket, listiner: (matrix: IPlayMatrix) => void) => {
  socket.on("on_game_update", ({ matrix }) => listiner(matrix));
};

export const onStartGame = async(socket: Socket, listiner: (option: IStartGame) => void) => {
  socket.on("start_game", listiner);
};
