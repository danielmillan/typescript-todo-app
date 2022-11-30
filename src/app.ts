import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from "./oas.json";
import MongoService from './services/MongoService';
import SessionMiddleware from './middlewares/session';
// Controllers
import TodoController from './controllers/TodoController';
import UserController from './controllers/UserController';
import RoleController from './controllers/RoleController';
import authController from './controllers/authController';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  '/todo',
  [SessionMiddleware.validateRouteAuthentication],
  TodoController
);
app.use(
  '/user',
  [SessionMiddleware.validateRouteAuthentication],
  UserController
);
app.use(
  '/role',
  [SessionMiddleware.validateRouteAuthentication],
  RoleController
);
app.use('/auth', authController);

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Start database
MongoService.connect();

export default app;
