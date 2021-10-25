import * as dotenv from "dotenv";

dotenv.config();

export const DB_STRING = process.env.DB_STRING || "";

export const API_URL = process.env.API_URL || "";  