import Todo from "../models/Task.js";

export const getTodos = async (req, res) => {
  const { username } = req.query;
  const todos = await Todo.find({ username });
  res.json(todos);
};

export const createTodo = async (req, res) => {
  const { title, username } = req.body;
  const todo = new Todo({ title, username });
  await todo.save();
  res.status(201).json(todo);
};

export const toggleTodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) {
      return res.status(404).json({ message: "Todo not Found" });
    }
    todo.completed = !todo.completed;
    await todo.save();
    res.json(todo);
  } catch (error) {
    res.status(500).json({ message: "Error toggling todo", error });
  }
};
// const todo = Todo.findById(req.params.id);
//   todo.completed = !todo.completed;
//   await todo.save();
//   res.json(todo);

export const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title } = req.body;

    const updateTodo = await Todo.findByIdAndUpdate(
      id,
      { title },
      { new: true }
    );
    if (!updateTodo) {
      return res.status(404).json({ message: "Todo not found" });
    }
    res.json(updateTodo);
  } catch (error) {
    res.status(500).json({ message: "Error updating todo", error });
  }
};

export const deleteTodo = async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};
