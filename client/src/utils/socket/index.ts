import { io, Socket } from "socket.io-client";
import { DefaultEventsMap } from "@socket.io/component-emitter";

export namespace socketService {
  let socket: Socket;

  export const getSocket = () => {
    return socket;
  };

  export const connect = (url: string): Promise<Socket<DefaultEventsMap, DefaultEventsMap>> => {
    return new Promise((res, rej) => {
      socket = io(url);

      if(!socket) return rej();

      socket.on("connet", () => {
        res(socket as Socket);
      });

      socket.on("connet_error", (err) => {
        rej(err)
      });
    });
  }
};
