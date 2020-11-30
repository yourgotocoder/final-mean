const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

const todoRoute = require("./routes/todo.routes");

mongoose
  .connect(
    "mongodb+srv://smit:ac97JMuJX8FZHQvO@cluster0.wkxqa.mongodb.net/secB?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connected to database successfully"))
  .catch((err) => console.log(err));

app.use(cors());
app.use(express.json());

app.use("/api/todo", todoRoute);

const PORT = 3000;

app.listen(PORT, console.log(`Server started at port: ${PORT}`));
