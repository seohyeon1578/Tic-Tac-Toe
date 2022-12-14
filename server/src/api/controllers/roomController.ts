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
  private userName = [];

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
      this.userName.push({
        roomId: message.roomId,
        socketId: socket.id,
        userName: message.userName
      });
      socket.emit("room_joined");

      if(connectedSockets.size === 2){ 
        const otherName = this.userName.filter((val) => val.roomId === message.roomId && val.socketId !== socket.id)[0].userName;
            
        socket.emit("start_game", { start: false, symbol: "X", name: otherName});
        socket.to(message.roomId).emit("start_game", { start: true, symbol: "O", name: message.userName });
      }
    }
  }

  @OnMessage("leave_game")
  public async leaveGame(
    @SocketIO() io: Server, 
    @ConnectedSocket() socket: Socket, 
    @MessageBody() message: any
  ) {
    console.log("leave room: ", message, "socket Id: ", socket.id);
    socket.leave(message.roomId)
    this.userName = this.userName.filter((val) => val.socketId !== socket.id);
    socket.to(message.roomId).emit("end_game");
  }
} 