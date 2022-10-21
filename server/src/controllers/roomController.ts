import { Socket, Server } from 'socket.io';
import { 
  ConnectedSocket, 
  MessageBody, 
  OnMessage, 
  SocketController, 
  SocketIO 
} from "socket-controllers";

@SocketController()
export class RoomController {

  @OnMessage("get_room_list")
  public async roomList(
    @SocketIO() io: Server, 
    @ConnectedSocket() socket: Socket
  ) {
    const {
      sockets: {
        adapter: {
          sids, rooms
        }
      }
    } = io;
    const roomList = [];

    rooms.forEach((_, key) => {
      if(sids.get(key) === undefined){
        roomList.push({ "name": key, "size": rooms.get(key).size})
      }
    })

    console.log(roomList)
    socket.emit("room_list", { list: roomList})
  }
  
  @OnMessage("join_game")
  public async joinGame(
    @SocketIO() io: Server, 
    @ConnectedSocket() socket: Socket, 
    @MessageBody() message: any
  ) {
    console.log("joining room: ", message, "socket Id: ", socket.id);

    const connectedSockets = io.sockets.adapter.rooms.get(message.roomId);
    const socketRooms = Array.from(socket.rooms.values()).filter((room) => room !== socket.id);

    if(socketRooms.length > 0 || connectedSockets && connectedSockets.size === 2){
      socket.emit("room_join_error", {
        error: "방이 가득찼습니다. 다른방을 선택해주세요."
      });
    }else {
      await socket.join(message.roomId);
      socket.emit("room_joined");

      if(connectedSockets.size === 2){      
        socket.emit("start_game", { start: false, symbol: "x" });
        socket.to(message.roomId).emit("start_game", { start: true, symbol: "o"});
      }
    }
  }
}