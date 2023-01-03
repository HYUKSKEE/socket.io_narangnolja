import { Server } from "socket.io";

const io = new Server(3000, {
  cors: {
    origin: ["http://localhost:4000"],
    credentials: true,
  },
});

io.on("connect", (socket) => {
  // ...
  console.log("????????????:", socket.id);

  socket.on("김진혁", (msg, callback) => {
    console.log(msg); // "world"
    callback("ACK");
  });

  socket.to(socket.id).emit("김진혁", "꺼져");

  //io.to(socket.id).emit("김진혁", "Your message");
});

io.listen(3001);
