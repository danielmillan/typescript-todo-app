import { Router, Request, Response } from "express";
import PermisionsMiddleware from "../middlewares/permisions";
import ITodo, { ETodoStatus } from "../models/ITodo";
import TodoService from "../services/TodoService";

const TodoController: Router = Router();

TodoController.post("/", [PermisionsMiddleware.validateCreatePermisions], async (request: Request, response: Response) => {
  try {
    const todo: ITodo = request.body;
    const serviceResult = await TodoService.createTodo(todo);
    response.send({ status: "ok", result: serviceResult });
  } catch (error) {
    response.status(500).send({ status: "failed", result: error });
  }
});

TodoController.get("/", [PermisionsMiddleware.validateSearchPermisions], async (request: Request, response: Response) => {
  try {
    const serviceResult = await TodoService.getTodos();
    console.log(serviceResult);
    response.send({ status: "ok", result: serviceResult });
  } catch (error) {
    response.status(500).send({ status: "failed", result: error });
  }
});

// crear las rutas para eliminar, actualizar, cambiar estado de una tarea y buscar por un id

TodoController.get('/:id', [PermisionsMiddleware.validateSearchPermisions], async (request: Request, response: Response) => {
  try {
    const id: Object = request.params.id;
    const serviceResult = await TodoService.findTodoById(id);
    response.send({ status: 'ok', result: serviceResult });
  } catch (error) {
    response.status(500).send({ status: 'Failed', result: error });
  }
});

TodoController.delete('/:id', [PermisionsMiddleware.validateDeletePermisions], async (request: Request, response: Response) => {
  try {
    const id: Object = request.params.id;
    const serviceResult = await TodoService.deleteTodo(id);
    response.send({ status: 'ok', result: serviceResult });
  } catch (error) {
    response.status(500).send({ status: 'Failed', result: error });
  }
})

TodoController.put('/:id', [PermisionsMiddleware.validateEditPermisions], async (request: Request, response: Response) => {
  try {
    const id: Object = request.params.id;
    const todo: ITodo = request.body;
    const serviceResult = await TodoService.editTodo(id, todo);
    response.send({ status: 'ok', result: serviceResult })
  } catch (error) {
    response.status(500).send({ status: 'Failed', result: error });
  }
});

TodoController.patch('/:id',  [PermisionsMiddleware.validateEditPermisions], async (request: Request, response: Response) => {
  try {
    const id: Object = request.params.id;
    const status: ETodoStatus = ETodoStatus[request.query.status as ETodoStatus];
    const serviceResult = await TodoService.updateStatus(id, status);
    response.send({ status: 'ok', result: serviceResult })
  } catch (error) {
    response.status(500).send({ status: 'Failed', result: error });
  }
});

TodoController.post("/responsibles/:id", [PermisionsMiddleware.validateCreatePermisions], async (request: Request, response: Response) => {
  try {
    const users: Object[] = request.body.users;
    const id: Object = request.params.id;
    const serviceResult = await TodoService.addResponsibleUsers(id, users);
    response.send({ status: "ok", result: serviceResult });
  } catch (error) {
    response.status(500).send({ status: "failed", result: error });
  }
});

export default TodoController;
