import { Request, Response, NextFunction } from "express";
import { ERolePermisions } from '../models/IRole';

export default class PermisionsMiddleware{
public static validateSearchPermisions(request:Request, response: Response, nextFunction: NextFunction){
    try {
        if(response.locals.user.permisions.includes(ERolePermisions.SEARCH)){
            nextFunction();
        } else{
            response.status(401).send({ status: 'Failed', result: 'No tiene acceso a este recurso.' });
        }
    } catch (error) {
        response.status(500).send({ status: "Failed", result: error});
    }
}

public static validateCreatePermisions(request: Request, response: Response, nextFunction: NextFunction){
    try {
        if(response.locals.user.permisions.includes(ERolePermisions.CREATE)){
            nextFunction();
        } else{
            response.status(401).send({ status: 'Failed', result: 'No tiene acceso a este recurso.' });
        }
    } catch (error) {
        response.status(500).send({ status: "Failed", result: error});
    }
}

public static validateDeletePermisions(request: Request, response: Response, nextFunction: NextFunction){
    try {
        if(response.locals.user.permisions.includes(ERolePermisions.DELETE)){
            nextFunction();
        } else{
            response.status(401).send({ status: 'Failed', result: 'No tiene acceso a este recurso.' });
        }
    } catch (error) {
        response.status(500).send({ status: "Failed", result: error});
    }
}

public static validateEditPermisions(request: Request, response: Response, nextFunction: NextFunction){
    try {
        if(response.locals.user.permisions.includes(ERolePermisions.EDIT)){
            nextFunction();
        } else{
            response.status(401).send({ status: 'Failed', result: 'No tiene acceso a este recurso.' });
        }
    } catch (error) {
        response.status(500).send({ status: "Failed", result: error});
    }
}
}