import { IncomingMessage, ServerResponse } from "node:http";
import { userRouter } from "./routes/user.route.";

export const handleRequest = (req: IncomingMessage, res: ServerResponse) => {
  const isUserRoute = userRouter(req, res);
  if (!isUserRoute) {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Not Found" }));
  }
};
