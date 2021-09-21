import * as dotenv from "dotenv";

dotenv.config();

export const { PORT, STATIC_DIR, UPLOAD_DIR } = process.env;
