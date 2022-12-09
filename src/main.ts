import http from 'http';
import config from "./config";
import app from "./app";

app.set('port', config.port);

const server = http.createServer(app);
server.listen(config.port);

server.on("listening", () => {
  console.log(`server ready in http://127.0.0.1:${config.port}`);
});

export default server;
