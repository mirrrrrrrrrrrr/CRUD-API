import dotenv from "dotenv";
dotenv.config();

export const DEVELOPMENT = process.env.NODE_ENV === "development";
export const PRODUCTION = process.env.NODE_ENV === "production";

export const SERVER_PORT = process.env.SERVER_PORT || 8000;
export const SERVER_HOST = process.env.SERVER_HOST || "localhost";

export const SERVER = {
  SERVER_HOST,
  SERVER_PORT,
};
