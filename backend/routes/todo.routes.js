const route = require("express").Router();

const Todo = require("../models/todo.models");

route.get("/",async (req, res) => {
  try {
    const foundTodo = await Todo.find();
    res.json(foundTodo);
  } catch (err) {
    console.log(err)
  }

});



route.post("/", async (req, res) => {
  const todo = req.body.todo;
  const todoItem = new Todo({
    todo: todo
  })
  try {
    const savedTodo = await todoItem.save();
    res.json(savedTodo);
  } catch (err) {
    console.log(err);
  }

});



route.delete("/:id",async (req, res) => {
  const todoId = req.params.id
  try {
    const deletedItem = await Todo.deleteOne({_id: todoId});
    res.json(deletedItem);
  } catch (err) {
    console.log(err)
  }
});

module.exports = route;
