import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';
import config from "../config";

export default class SessionMiddleware {
    public static validateRouteAuthentication(request: Request, response: Response, nextFunction: NextFunction) {
        try {
            const token = request.headers.authorization?.split(" ")[1];
            if (token) {
                if (jwt.verify(token, config.jwtKey)) {
                    const user = Object(jwt.decode(token));
                    response.locals['user'] = {
                        _id: user!._id,
                        email: user!.email,
                        role: user!.role,
                    };
                    nextFunction();
                } else {
                    response.status(401).send({ status: 'failed', result: 'Sesion no es valida' });
                }
            } else {
                response.status(401).send({ status: 'failed', result: 'No tiene acceso a este recurso' });
            }
        } catch (error) {
            response.status(500).send({ status: 'failed', result: error });
        }
    }
}