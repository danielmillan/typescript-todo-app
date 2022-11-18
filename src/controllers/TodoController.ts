import { Router, Request, Response } from "express";
import ITodo, { ETodoStatus } from "../models/ITodo";
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

TodoController.get('/:id', async (request: Request, response: Response) => {
  try {
    const id: Object = request.params.id;
    const serviceResult = await TodoService.findTodoById(id);
    response.send({ status: 'ok', result: serviceResult });
  } catch (error) {
    response.status(500).send({ status: 'Failed', result: error });
  }
});

TodoController.delete('/:id', async (request: Request, response: Response) => {
  try {
    const id: Object = request.params.id;
    const serviceResult = await TodoService.deleteTodo(id);
    response.send({ status: 'ok', result: serviceResult });
  } catch (error) {
    response.status(500).send({ status: 'Failed', result: error });
  }
})

TodoController.put('/:id', async (request: Request, response: Response) => {
  try {
    const id: Object = request.params.id;
    const todo: ITodo = request.body;
    const serviceResult = await TodoService.editTodo(id, todo);
    response.send({ status: 'ok', result: serviceResult })
  } catch (error) {
    response.status(500).send({ status: 'Failed', result: error });
  }
});

TodoController.patch('/:id', async (request: Request, response: Response) => {
  try {
    const id: Object = request.params.id;
    const status: ETodoStatus = ETodoStatus[request.query.status as ETodoStatus];
    const serviceResult = await TodoService.updateStatus(id, status);
    response.send({ status: 'ok', result: serviceResult })
  } catch (error) {
    response.status(500).send({ status: 'Failed', result: error });
  }
});

export default TodoController;
