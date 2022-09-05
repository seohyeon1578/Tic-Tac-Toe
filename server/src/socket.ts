import { useSocketServer } from "socket-controllers";
import { Server } from "socket.io";

export default (httpServer) => {
  const io = new Server(httpServer, {
    cors: {
      origin: "*"
    },
  });

  io.on("connection", (socket) => {
    console.log("hello")
  })

  useSocketServer(io, { controllers: [__dirname + "/server/src/api/controllers/*.ts"] });

  return io;
};