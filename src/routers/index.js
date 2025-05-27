import { Router } from 'express';
import contactsRoutes from './contacts.js';
import authRoutes from './auth.js';
import { authenticate } from '../middlewares/authenticate.js';

const routes = Router();

routes.use('/contacts', authenticate, contactsRoutes);
routes.use('/auth', authRoutes);

export default routes;
