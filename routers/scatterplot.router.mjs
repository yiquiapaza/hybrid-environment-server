import express from 'express';
import { getElement, addElement } from '../controllers/scatterplot.controller.mjs';

const router = express.Router();

router.get('/', getElement);

router.post('/desktop', addElement);

router.post('/hololens', addElement);

export default router;
