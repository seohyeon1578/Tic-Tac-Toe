import { 
  ConnectedSocket, 
  OnConnect,
  OnDisconnect,
  SocketController, 
  SocketIO
} from "socket-controllers";
import { Socket, Server } from "socket.io";

@SocketController()
export class MainController {  
  @OnConnect()
  public onConnection(
    @ConnectedSocket() socket: Socket, 
    @SocketIO() io: Server
  ) {
    console.log("New connected: ", socket.id);
  }

  @OnDisconnect()
  public onDisconnection(
    @ConnectedSocket() socket: Socket, 
    @SocketIO() io: Server
  ) {
    console.log("Disconnected: ", socket.id)
  }
}