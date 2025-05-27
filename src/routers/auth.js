import express from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { registerUserShema, loginUserSchema } from '../validation/auth.js';
import {
  registerUserController,
  loginUserController,
  logoutUserController,
  refreshUserSessionController,
} from '../controllers/auth.js';
import { validateBody } from '../middlewares/validateBody.js';

const authRoutes = express.Router();
const jsonParser = express.json();

authRoutes.post(
  '/register',
  jsonParser,
  validateBody(registerUserShema),
  ctrlWrapper(registerUserController),
);

authRoutes.post(
  '/login',
  jsonParser,
  validateBody(loginUserSchema),
  ctrlWrapper(loginUserController),
);

authRoutes.post('/logout', ctrlWrapper(logoutUserController));

authRoutes.post('/refresh', ctrlWrapper(refreshUserSessionController));

export default authRoutes;
