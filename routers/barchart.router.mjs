import express from 'express';
import {
  getBarchart,
  addElement,
  resetElement,
} from '../controllers/barchart.controller.mjs';

const router = express.Router();

router.get('/', getBarchart);

router.post('/desktop', addElement);

router.post('/hololens', addElement);

router.get('/reset', resetElement);

export default router;
