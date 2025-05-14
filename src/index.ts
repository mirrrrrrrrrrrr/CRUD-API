import { createServer } from "node:http";
import { SERVER } from "./config/config";
import { handleRequest } from "./app";

// create server
const server = createServer(handleRequest);

// listen server
server.listen(SERVER.SERVER_PORT, () =>
  console.log(
    `Server running on: http://${SERVER.SERVER_HOST}:${SERVER.SERVER_PORT}`,
  ),
);
