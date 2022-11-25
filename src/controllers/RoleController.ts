import { Router, Request, Response } from "express";
import IRole from "../models/IRole";
import RoleService from "../services/RoleService";

const RoleController: Router = Router();

RoleController.post('/', async (request: Request, response: Response) => {
  try {
    const role: IRole = request.body;
    const serviceResult = await RoleService.createRole(role);
    response.send({ status: "ok", result: serviceResult });
  } catch (error) {
    response.status(500).send({ status: "failed", result: error });
  }
});

RoleController.get("/", async (request: Request, response: Response) => {
  try {
    const serviceResult = await RoleService.getRoles();
    response.send({ status: "ok", result: serviceResult });
  } catch (error) {
    response.status(500).send({ status: "failed", result: error });
  }
});

RoleController.delete('/:id', async (request: Request, response: Response) => {
  try {
    const id: Object = request.params.id;
    const serviceResult = await RoleService.deleteRole(id);
    response.send({ status: 'ok', result: serviceResult });
  } catch (error) {
    response.status(500).send({ status: 'Failed', result: error });
  }
});

RoleController.put('/:id', async (request: Request, response: Response) => {
  try {
    const id: Object = request.params.id;
    const role: IRole = request.body;
    const serviceResult = await RoleService.editUser(id, role);
    console.log(serviceResult);
    response.send({ status: 'ok', result: serviceResult })
  } catch (error) {
    response.status(500).send({ status: 'Failed', result: error });
  }
});

export default RoleController;