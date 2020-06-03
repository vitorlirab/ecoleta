import { Router } from 'express';
import ItemsController from './controller/ItemsController';
import PointsController from './controller/PointsController';

const routes = Router();

routes.get('/items', ItemsController.index);

routes.get('/points', PointsController.index);
routes.get('/points/:id', PointsController.show);
routes.post('/points', PointsController.store);

export default routes;
