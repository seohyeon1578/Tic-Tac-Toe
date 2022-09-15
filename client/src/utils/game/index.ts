import { Socket } from 'socket.io-client';

const joinGameRoom = (socket: Socket, roomId: string): Promise<boolean> => {
  return new Promise((res, rej) => {
    socket.emit("join_game", { roomId });
    socket.on("room_joined", () => res(true));
    socket.on("room_join_error", ({ error }) => rej(error));
  })
};

export default joinGameRoom;