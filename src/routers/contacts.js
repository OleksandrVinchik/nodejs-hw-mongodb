import express from 'express';
import {
  getContactsController,
  getContactIdController,
  createContactController,
  updateContactContoller,
  deleteContactController,
} from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { isValidId } from '../middlewares/isValidId.js';
import { validateBody } from '../middlewares/validateBody.js';
import {
  createContactSchema,
  updateContactSchema,
} from '../validation/contacts.js';
import { upload } from '../middlewares/multer.js';

const contactsRoutes = express.Router();
const jsonParser = express.json({
  type: 'application/json',
});

contactsRoutes.get('/', ctrlWrapper(getContactsController));

contactsRoutes.get(
  '/:contactId',
  isValidId,
  ctrlWrapper(getContactIdController),
);

contactsRoutes.post(
  '/',
  jsonParser,
  upload.single('photo'),
  validateBody(createContactSchema),
  ctrlWrapper(createContactController),
);

contactsRoutes.patch(
  '/:contactId',
  jsonParser,
  upload.single('photo'),
  isValidId,
  validateBody(updateContactSchema),
  ctrlWrapper(updateContactContoller),
);

contactsRoutes.delete(
  '/:contactId',
  isValidId,
  ctrlWrapper(deleteContactController),
);

export default contactsRoutes;
