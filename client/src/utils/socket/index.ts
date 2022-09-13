import { io, Socket } from "socket.io-client";
import { DefaultEventsMap } from "@socket.io/component-emitter";

const socketConnect = (url: string): Promise<Socket<DefaultEventsMap, DefaultEventsMap>> => {
  return new Promise((res, rej) => {
    const socket = io(url)

    if(!socket) return rej();

    socket.on("connet", () => {
      res(socket as Socket);
    });

    socket.on("connet_error", (err) => {
      rej(err)
    });
  });
};

export default socketConnect;