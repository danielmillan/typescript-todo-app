import { Router, Request, Response } from 'express';
import IAuthentication from '../models/IAuthentication';
import authService from '../services/authService';

const authController: Router = Router();

authController.post('/', async (request: Request, response: Response) => {
    try {
        const credentials: IAuthentication = request.body;
        const resultService = await authService.authenticateUser(credentials);
        response.send({ status: 'ok', result: resultService });
    } catch (error: any) {
        response
            .status(error.status ? error.status : 500)
            .send({
                status: 'failed',
                result: error.message ? error.message : error,
            });
    }
});

export default authController;
