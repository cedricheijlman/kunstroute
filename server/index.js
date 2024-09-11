// server/index.js

import express, { json } from "express";
import { config } from "dotenv";

config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(json());

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
