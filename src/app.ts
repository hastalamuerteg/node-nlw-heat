import express from "express";
import "dotenv/config";
import { router } from "./routes";
import http from "http";
import cors from "cors";
import { Server } from "socket.io";

const app = express();
app.use(cors());
const serverHttp = http.createServer(app);
const io = new Server(serverHttp, {
  cors: {
    origin: "*",
  },
});
app.use(express.json());
app.use(router);

io.on("connection", (socket) => {
  console.log(`Usuário  conectado - socket id = ${socket.id}`);
});

app.get("/github", (req, res) => {
  res.redirect(
    `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`
  );
});

app.get("/signin/callback", (req, res) => {
  const { code } = req.query;
  return res.json(code);
});

export { serverHttp, io };
