import express from 'express';
import { getBarchart, addElement } from '../controllers/barchart.controller.mjs'

const router = express.Router();

router.get('/', getBarchart);

router.post('/desktop', addElement);

router.post('/hololens', addElement);

export default router;
