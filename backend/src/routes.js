import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import VehicleController from './app/controllers/VehicleController';
import authMiddleware from './app/middlewares/auth';
import OwnerController from './app/controllers/OwnerController';
import SessionControllerOwner from './app/controllers/SessionControllerOwner';
import RequestController from './app/controllers/RequestController';
import PaymentController from './app/controllers/PaymentController';
import RateController from './app/controllers/RateController';

const routes = new Router();

const upload = multer(multerConfig);

routes.post('/users', UserController.store);

routes.post('/owners', OwnerController.store);

routes.post('/sessions', SessionController.store);

routes.post('/sessionsOwner', SessionControllerOwner.store);

routes.get('/vehicles', VehicleController.index);

routes.use(authMiddleware);

routes.put('/users', UserController.update);

routes.get('/getProfile', UserController.getUser);

routes.post('/vehicles', upload.array('files', 5), VehicleController.store);

routes.post(`/requestBooking/:id`, RequestController.store);

routes.put(`/requestBooking/:id`, RequestController.update);

routes.get('/requestBooking', RequestController.index);

routes.get('/requestBooking/:id', RequestController.getOne);

routes.get('/fetchDetails/:id', VehicleController.fetchDetails);

routes.get('/fetchDetails', RequestController.fetchDetails);

routes.get('/payments', PaymentController.index);

routes.get('/payments/:paymentId', PaymentController.detail);

routes.put('/payments/:paymentId', PaymentController.update);

routes.post(`/rates`, RateController.store);

routes.get(`/rates/:vehicleId`, RateController.index);

export default routes;
