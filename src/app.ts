import { IncomingMessage, ServerResponse } from "node:http";
import { userRouter } from "./routes/user.route.";

export const handleRequest = (req: IncomingMessage, res: ServerResponse) => {
  const isUserRoute = userRouter(req, res);
  if (!isUserRoute) {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end(`
      <style>
        body {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
        }
      </style>
      <div>
        <h1>Page Not Found</h1>
        <p>Status Code: <b>404</b></p>
      </div>
      `);
  }
};
