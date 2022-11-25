import express from "express";
import MongoService from "./services/MongoService";
import SessionMiddleware from "./middlewares/session";
// Controllers
import TodoController from "./controllers/TodoController";
import UserController from "./controllers/UserController";
import RoleController from "./controllers/RoleController";
import authController from "./controllers/authController";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/todo", TodoController);
app.use("/user", [SessionMiddleware.validateRouteAuthentication], UserController);
app.use("/role", RoleController);
app.use("/auth", authController);

// Start database
MongoService.connect();

export default app;
