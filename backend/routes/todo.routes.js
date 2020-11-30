const route = require("express").Router();
const { async } = require("rxjs/internal/scheduler/async");
const Todo = require("../models/todo.models");

route.get("/", (req, res) => {
  //Get todo from database
});

route.get("/:id",  (req, res) => {

});

route.post("/", (req, res) => {
  //Post to database
});

route.put("/:id", (req, res) => {
  //Edit item in database
});

route.delete("/:id", async (req, res) => {
  //Delete from database
});

module.exports = route;
