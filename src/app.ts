import express from "express";
import "dotenv/config";

const app = express();

app.get("/signin/callback", (req, res) => {
  const { code } = req.query;
  return res.json(code);
});

app.get("/github", (req, res) => {
  res.redirect(
    `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`
  );
});

app.listen(3001, () => {
  console.log("server online, running on port 3001");
});
