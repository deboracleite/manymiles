import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import VehicleController from './app/controllers/VehicleController';
import authMiddleware from './app/middlewares/auth';

const routes = new Router();

const upload = multer(multerConfig);

routes.post('/users', UserController.store);

routes.post('/sessions', SessionController.store);

routes.get('/vehicles', VehicleController.index);

routes.use(authMiddleware);

routes.put('/users', UserController.update);

routes.post('/vehicles', upload.array('files', 5), VehicleController.store);

export default routes;
