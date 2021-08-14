// web sockets are helpful to maintain the connection so that in case of making a lot of connection for small things like sending a chat or something else.
// so the time to built and then close that connection each time gets reduced with the help of the web socket

// websockets keep a constant connection and thus the user can make multiple requests with only one time connection

const io = require("socket.io")(3000, {
  cors: {
    origin: ["http://localhost:8080"],
  },
});

io.on("connection", (socket) => {
  console.log(socket.id); // when a client is connected to our server then a random id is assigned to it
}); // this is going to run each time a client connects to our server and it is going to provide a socket instance to each of them
