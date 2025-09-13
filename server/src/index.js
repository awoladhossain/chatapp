import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/db.js";
import authRouter from "./routers/auth.route.js";
import messageRouter from "./routers/message.route.js";
dotenv.config();
const app = express();
connectDB();
const PORT = process.env.PORT || 5000;

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/auth", authRouter);
app.use("/api/messages", messageRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
