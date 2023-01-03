import { io } from "socket.io-client";

const h = document.querySelector(".a");
const socket = io("ws://localhost:3001");
const name = "김진혁";
const msg = "뭐하냐 나와";

socket.on("connect", () => {
  // ...
  console.log("connect");
});

socket.emit(name, `${name} : ${msg}`, (response) => {
  console.log(response); // "got it"
  h.append(
    "<div>" + response + " : from <strong>" + response + "</strong></div>"
  );
});
