import { Router, Request, Response } from "express";
import authService from "../services/authService";

const authController: Router = Router();

authController.post('/', async(request: Request, response: Response) =>{
    try {
        const email = request.body.email;
        const password = String(request.body.password);
        const resultService = await authService.authenticateUser(email, password);
        response.send(resultService);
    } catch (error) {
        response.status(500).send({ status: "failed", result: error });
    }
})

export default authController;