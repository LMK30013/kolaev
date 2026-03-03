import dotenv from "dotenv";

dotenv.config();

export const env = {
  PORT: process.env.PORT || "3333",
  NODE_ENV: process.env.NODE_ENV || "development",
};