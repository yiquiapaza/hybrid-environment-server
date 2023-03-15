import express from 'express';
import {
  getElement,
  addElement,
  resetElement,
} from '../controllers/scatterplot.controller.mjs';

const router = express.Router();

router.get('/', getElement);

router.post('/desktop', addElement);

router.post('/hololens', addElement);

router.get('/reset', resetElement);
export default router;
