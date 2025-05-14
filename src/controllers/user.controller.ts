import { v4 as uuid } from "uuid";
import { IncomingMessage, ServerResponse } from "node:http";
import { Users } from "../models/user.model";

export const getUsers = async (res: ServerResponse) => {
  res.writeHead(200, { "content-type": "application/json" });
  res.end(JSON.stringify(Users));
};

export const getUserById = async (
  res: ServerResponse,
  userId: string | undefined,
) => {
  const user = Users.find((u) => u.id === userId);

  if (!user) {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "User not found" }));
    return;
  }

  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(user));
};

export const createUser = (req: IncomingMessage, res: ServerResponse) => {
  let body = "";
  req.on("data", (chunk) => (body += chunk));
  req.on("end", () => {
    const data = JSON.parse(body);
    const newUser = { id: uuid(), ...data };
    Users.push(newUser);
    res.writeHead(201, { "content-type": "application/json" });
    res.end(JSON.stringify(newUser));
  });
};

export const updateUser = (
  req: IncomingMessage,
  res: ServerResponse,
  id: string | undefined,
) => {
  let body = "";
  req.on("data", (chunk) => (body += chunk));
  req.on("end", () => {
    try {
      const data = JSON.parse(body);
      const index = Users.findIndex((u) => u.id === id);

      Users[index] = { ...Users[index], ...data };
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(Users[index]));
    } catch (err) {
      res.writeHead(400, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Invalid JSON format" }));
    }
  });

  req.on("error", () => {
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Server error" }));
  });
};

export const deleteUser = (res: ServerResponse, id: string | undefined) => {
  const index = Users.findIndex((u) => u.id === id);

  Users.splice(index, 1);
  res.writeHead(204);
  res.end();
};
