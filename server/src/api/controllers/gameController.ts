import {
  ConnectedSocket,
  MessageBody,
  SocketIO,
  OnMessage,
  SocketController
} from "socket-controllers";
import { Socket } from "socket.io";

let waiting = []

@SocketController()
export class GameController {
  private getSocketGameRoom(socket: Socket): string{
    const socketRooms = Array.from(socket.rooms.values()).filter((room) => room !== socket.id);
    const gameRoom = socketRooms && socketRooms[0];

    return gameRoom;
  }

  @OnMessage("update_game")
  public async updateGame(
    @SocketIO() io: Socket,
    @ConnectedSocket() socket: Socket,
    @MessageBody() message: any
  ){
    const gameRoom = this.getSocketGameRoom(socket);
    socket.to(gameRoom).emit("on_game_update", message);
  }

  @OnMessage("game_win")
  public async gameWin(
    @SocketIO() io: Socket,
    @ConnectedSocket() socket: Socket,
    @MessageBody() message: any
  ){
    const gameRoom = this.getSocketGameRoom(socket);
    socket.to(gameRoom).emit("on_game_win", message);
  }

  @OnMessage("waiting_game")
  public async waitGame(
    @SocketIO() io: Socket,
    @ConnectedSocket() socket: Socket,
    @MessageBody() message: any
  ){
    const gameRoom = this.getSocketGameRoom(socket);
    waiting.unshift({
      gameRoom: gameRoom
    })
    if(waiting.filter((val, idx) => val.gameRoom === gameRoom).length == 2) {
      io.to(gameRoom).emit("finished_wait");
      waiting = waiting.filter((val, idx) => val.gameRoom !== gameRoom);
    }
  }
}