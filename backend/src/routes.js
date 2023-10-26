import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import VehicleController from './app/controllers/VehicleController';
import authMiddleware from './app/middlewares/auth';
import OwnerController from './app/controllers/OwnerController';
import SessionControllerOwner from './app/controllers/SessionControllerOwner';

const routes = new Router();

const upload = multer(multerConfig);

routes.post('/users', UserController.store);

routes.post('/owners',OwnerController.store);

routes.post('/sessions', SessionController.store);

routes.post('/sessionsOwner',SessionControllerOwner.store);

routes.get('/vehicles', VehicleController.index);

routes.use(authMiddleware);

routes.put('/users', UserController.update);

routes.post('/vehicles', upload.array('files', 5), VehicleController.store);


routes.get('/fetchDetails/:id',VehicleController.fetchDetails);

export default routes;
