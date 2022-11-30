import { Request, Response, NextFunction } from 'express';
import { ERolePermisions } from '../models/IRole';

export default class PermisionsMiddleware {
  public static validateAction(permission: ERolePermisions) {
    return function (
      request: Request,
      response: Response,
      nextFunction: NextFunction
    ) {
      try {
        response.locals.user.permisions.find(
          (p: ERolePermisions) => p === permission
        )
          ? nextFunction()
          : response.status(401).send({
              status: 'Failed',
              result: 'No tiene los permisos para acceder a este recurso.',
            });
      } catch (error) {
        response.status(500).send({ status: 'Failed', result: error });
      }
    };
  }
}
