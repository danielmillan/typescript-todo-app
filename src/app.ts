import express from "express";
import MongoService from "./services/MongoService";
// Controllers
import TodoController from "./controllers/TodoController";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/todo", TodoController);

// Start database
MongoService.connect();

export default app;
