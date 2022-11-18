import { Router, Request, Response } from "express";
import IUser from "../models/IUser";
import UserService from "../services/UserService";

const UserController: Router = Router();

UserController.post("/", async (request: Request, response: Response) => {
  try {
    const user: IUser = request.body;
    const serviceResult = await UserService.createUser(user);
    response.send({ status: "ok", result: serviceResult });
  } catch (error) {
    response.status(500).send({ status: "failed", result: error });
  }
});

UserController.get("/", async (request: Request, response: Response) => {
  try {
    const serviceResult = await UserService.getUsers();
    response.send({ status: "ok", result: serviceResult });
  } catch (error) {
    response.status(500).send({ status: "failed", result: error });
  }
});

UserController.get('/:id', async (request: Request, response: Response) => {
  try {
    const id: Object = request.params.id;
    const serviceResult = await UserService.findUserById(id);
    response.send({ status: 'ok', result: serviceResult });
  } catch (error) {
    response.status(500).send({ status: 'Failed', result: error });
  }
});

UserController.delete('/:id', async (request: Request, response: Response) => {
  try {
    const id: Object = request.params.id;
    const serviceResult = await UserService.deleteUser(id);
    response.send({ status: 'ok', result: serviceResult });
  } catch (error) {
    response.status(500).send({ status: 'Failed', result: error });
  }
})

UserController.put('/:id', async (request: Request, response: Response) => {
  try {
    const id: Object = request.params.id;
    const user: IUser = request.body;
    const serviceResult = await UserService.editUser(id, user);
    response.send({ status: 'ok', result: serviceResult })
  } catch (error) {
    response.status(500).send({ status: 'Failed', result: error });
  }
});

export default UserController;