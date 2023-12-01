import server from '../src/server';
import supertest from 'supertest';

import { requestController } from './controllers/requestController';
import { vehicleController } from './controllers/vehicleController';
import { userController } from './controllers/userController';
const app = supertest(server);
requestController(app);
vehicleController(app);
userController(app)