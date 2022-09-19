import { Socket } from 'socket.io';
import { Server } from 'socket.io';
import { ConnectedSocket, MessageBody, OnMessage, SocketController, SocketIO } from "socket-controllers";

@SocketController()
export class RoomController {
  
  @OnMessage("join_game")
  public async joinGame(
    @SocketIO() io: Server, 
    @ConnectedSocket() socket: Socket, 
    @MessageBody() message: any
  ) {

    console.log("joining room: ", message);

    const connectedSockets = io.sockets.adapter.rooms.get(message.roomId);
    const socketRooms = Array.from(socket.rooms.values()).filter((r) => r !== socket.id);

    if(socketRooms.length > 0 || connectedSockets && connectedSockets.size === 2){
      socket.emit("room_join_error", {
        error: "방이 가득찼습니다. 다른방을 선택해주세요."
      });
    }else {
      await socket.join(message.roomId);
      socket.emit("room_joined");
    }
  }
}