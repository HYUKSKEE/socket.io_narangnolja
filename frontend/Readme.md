일단 index.html이랑 main.js 생성해서 source 연결합니다.

브라우저에서 데이터를 받을 것이기 때문에

cdn으로 간단하게 할 수 있지만,

백엔드에서 npm의 힘을 빌렸으니 프론트도 npm으로 진행하겠습니다.

그냥 쓰면 안쓰는것 마냥 못하니 live server를 구현해보겠습니다.

1. npm init 하기
2. webpackl으로 하는 live server

   ```jsx
   npm i -D webpack webpack-cli webpack-dev-server
   ```

3. webpack.config.js

   ```jsx
   const path = require("path");
   module.exports = {
     mode: "development",
     entry: {
       app: path.join(__dirname, "/"),
     },
     output: {
       filename: "app.js",
       path: path.join(__dirname, "dist"),
       publicPath: "/dist",
     },
     devServer: {
       static: {
         directory: path.join(__dirname, "/"),
       },
       compress: true,
       port: 3000,
     },
   };
   ```

4. script에 명령어 추가

   ```jsx
   	"start": "webpack-dev-server --hot"
   ```

5. 그리고 index.html sorce경로 설정

   일단 위의 설정대로는 dist/app.js 입니다.

   더 자세한 옵션은 물어보면 알려 드립니다.

   실시간으로 console.log hello word 쳐보십쇼

   ### TMI

   만약에 여기까지 따라왔으면 백엔드에서는 import 를 사용할려고 package.json에

   type: module를 설정했는데, 여기서는 설정 안했는데 왜 import를 쓸수 있는 생각해보셨나요?

6. 클라이언트 package 다운 및 코드 입력

   ```jsx
   	npm i socket.io-client

   import { io } from "socket.io-client";

   const socket = io("ws://example.com/my-namespace", {
     reconnectionDelayMax: 10000,
     auth: {
       token: "123"
     },
     query: {
       "my-key": "my-value"
     }
   });
   ```

   다시 option 저도 안읽어봄 실습하는데 쓸일 없어서 url만 넣습니다.

   ```jsx
   const socket = io("localhost:3000");
   ```

   에러 뜰꺼임 서버에서 cors 설정 해줘야함 옵션 찾아보기

백엔드도 live server 사용하고 싶으면 → npm i -g nodemon : 전역설치

전역설치가 싫으면 npm i -d nodemon
