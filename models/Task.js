import mongoose from "mongoose";
const { Schema } = mongoose;

const todoSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  username: {
    type: String,
  },
});
const Todo = mongoose.model("Todo", todoSchema);
export default Todo;
