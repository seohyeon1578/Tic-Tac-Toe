import { IList } from './../../type/interfaces/room/index';
import { Socket } from "socket.io-client";
import { IStartGame } from "../../type/interfaces/game";
import { IPlayMatrix } from "../../type/types/game.type";

class GameService {
  public async getRoomList(
    socket: Socket,
    listiner: (list: IList) => void
  ) {
    socket.emit("get_room_list")
    socket.on("room_list", ({ list } : { list: IList}) => listiner(list))
  }

  public async joinGameRoom(socket: Socket, roomId: string): Promise<boolean> {
    return new Promise((rs, rj) => {
      socket.emit("join_game", { roomId });
      socket.on("room_joined", () => rs(true));
      socket.on("room_join_error", ({ error }) => rj(error));
    });
  }

  public async leaveGameRoom(socket: Socket, roomId: string) {
    socket.emit("leave_game", { roomId });
  }

  public async updateGame(socket: Socket, gameMatrix: IPlayMatrix) {
    socket.emit("update_game", { matrix: gameMatrix });
  }

  public async onGameUpdate(
    socket: Socket,
    listiner: (matrix: IPlayMatrix) => void
  ) {
    socket.on("on_game_update", ({ matrix }) => listiner(matrix));
  }

  public async onStartGame(
    socket: Socket,
    listiner: (options: IStartGame) => void
  ) {
    socket.on("start_game", listiner);
  }

  public async onEndGame(
    socket: Socket,
    listiner: () => void
  ){
    socket.on("end_game", listiner);
  }

  public async gameWin(socket: Socket, message: string) {
    socket.emit("game_win", { message });
  }

  public async onGameWin(socket: Socket, listiner: (message: string) => void) {
    socket.on("on_game_win", ({ message }) => listiner(message));
  }
}

export default new GameService();
