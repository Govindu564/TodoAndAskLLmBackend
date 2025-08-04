import express from "express";
const app = express();
const PORT = 3002;
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import todoRoutes from "./routes/todoRoutes.js";
// import llmRoutes from "./routes/oneroute.js"
import llmRoutes from "./routes/askroute.js";

dotenv.config();
app.use(
  cors({
    origin: "https://todo-and-ask-l-lm-frontend-ikyf.vercel.app",
  })
);
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("MondoDB connected successfully!"))
  .catch((err) => console.log("Error connecting to MongoDB:", err));

app.use("/api/todos", todoRoutes);
app.use("/api/ask", llmRoutes);

app.get("/", (req, res) => {
  res.send("This is root of the page");
});
app.listen(PORT, (req, res) => {
  console.log(`This Port is listenning:${PORT}`);
});
