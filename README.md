# socketIO-NaRangNolJa

## 백엔드 절차

    1. node 환경 세팅

        ```jsx
        npm i http   // http 통신 할 경우 추가
        npm i socket.io
        ```

    2. 공식문서  코드 가져오기

        [https://socket.io/docs/v4/server-api/](https://socket.io/docs/v4/server-api/)

        ```jsx
        // http port 열고 싶을 때
        import { createServer } from "http";
        import { Server } from "socket.io";

        const httpServer = createServer();
        const io = new Server(httpServer, {
          // options
        });

        io.on("connection", (socket) => {
          // ...
        });

        httpServer.listen(3000);

        // http 안열어도 됨 아래처럼
        import { Server } from "socket.io";

        const io = new Server(3000, {
          // options
        });

        io.on("connection", (socket) => {
          // ...
        });
        ```

        컴파일에러 뜰꺼임 import를 사용해서

         package.json에 type을 module을 넣어주면 됩니다.
