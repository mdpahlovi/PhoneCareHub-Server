/* eslint-disable no-undef */
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
    port: process.env.PORT,
    env: process.env.NODE_ENV,
    secret: process.env.SECRET,
    database_url: process.env.DATABASE_URL,
};
