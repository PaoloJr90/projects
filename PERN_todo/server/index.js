import express from "express";
import cors from "cors";
import pool from "./db.js";

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// Routes

// create a todo

app.post("/todos", async (req, res) => {
  try {
    console.log(req.body);
  } catch (err) {
    console.error(err.message);
  }
});

// get all todos

app.get("/todos", async (req, res) => {
  try {
    console.log(req.body);
  } catch (err) {
    console.error(err.message);
  }
});

// update a todo

// delete a todo

const port = 5000;
app.listen(port, () => {
  console.log(`Server is operational on ${port}`);
});
