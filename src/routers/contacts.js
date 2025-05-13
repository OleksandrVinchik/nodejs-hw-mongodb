import { Router } from 'express';
import {
  getContactsController,
  getContactIdController,
  createContactController,
  updateContactContoller,
  deleteContactController,
} from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import express from 'express';

const router = Router();
const jsonParser = express.json();

router.get('/', ctrlWrapper(getContactsController));

router.get('/:contactId', ctrlWrapper(getContactIdController));

router.post('/', jsonParser, ctrlWrapper(createContactController));

router.patch('/:contactId', jsonParser, ctrlWrapper(updateContactContoller));

router.delete('/:contactId', ctrlWrapper(deleteContactController));

export default router;
