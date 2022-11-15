import { Router, Request, Response } from "express";
import ITodo from "../models/ITodo";
import TodoService from "../services/TodoService";

const TodoController: Router = Router();

TodoController.post("/", async (request: Request, response: Response) => {
  try {
    const todo: ITodo = request.body;
    const serviceResult = await TodoService.createTodo(todo);
    response.send({ status: "ok", result: serviceResult });
  } catch (error) {
    response.status(500).send({ status: "failed", result: error });
  }
});

TodoController.get("/", async (request: Request, response: Response) => {
  try {
    const serviceResult = await TodoService.getTodos();
    response.send({ status: "ok", result: serviceResult });
  } catch (error) {
    response.status(500).send({ status: "failed", result: error });
  }
});

// crear las rutas para eliminar, actualizar, cambiar estado de una tarea y buscar por un id

export default TodoController;
