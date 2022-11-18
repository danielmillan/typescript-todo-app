import express from "express";
import MongoService from "./services/MongoService";
// Controllers
import TodoController from "./controllers/TodoController";
import UserController from "./controllers/UserController";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/todo", TodoController);
app.use("/user", UserController);

// Start database
MongoService.connect();

export default app;
