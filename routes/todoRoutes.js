import express from "express";
const router = express.Router();
import {
  getTodos,
  createTodo,
  toggleTodo,
  deleteTodo,
  updateTodo,
} from "../controllers/todocontroller.js";
router.get("/", getTodos);
router.post("/", createTodo);
router.patch("/:id", toggleTodo);
router.put("/:id",updateTodo);
router.delete("/:id", deleteTodo);

export default router;
