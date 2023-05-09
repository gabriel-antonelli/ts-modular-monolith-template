import express from "express";
import "dotenv/config";

const app = express();
const port = process.env.PORT;

export const server = app.listen(port, () => console.log("Server started..."));
