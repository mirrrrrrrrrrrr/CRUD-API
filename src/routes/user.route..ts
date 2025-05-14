import { IncomingMessage, ServerResponse } from "node:http";
import {
  createUser,
  deleteUser,
  getUserById,
  getUsers,
  updateUser,
} from "../controllers/user.controller";

export const userRouter = (
  req: IncomingMessage,
  res: ServerResponse
): boolean => {
  // GET user
  if (req.url === "/api/users" && req.method === "GET") {
    getUsers(res);
    return true;
  }
  // GET user by ID
  if (req.url?.startsWith("/api/users") && req.method === "GET") {
    const userId = req.url.split("/")[3];

    getUserById(res, userId);
    return true;
  }
  // POST
  if (req.url === "/api/users" && req.method === "POST") {
    createUser(req, res);
    return true;
  }
  // PUT
  if (req.url?.startsWith("/api/users") && req.method === "PUT") {
    const id = req.url.split("/")[3];

    updateUser(req, res, id);
    return true;
  }
  // DELETE
  if (req.url?.startsWith("/api/users") && req.method === "DELETE") {
    const id = req.url.split("/")[3];

    deleteUser(res, id);
    return true;
  }
  return false;
};
