import express from 'express';
import { getBarchart, addElement, } from '../controllers/barchart.controller.mjs'

const router = express.Router();

router.get('/', getBarchart);

router.post('/desktop', addElement);

router.post('/hololens', addElement);

router.get('/reset');

router.get('/reset/get')

router.post('/reset/set')

export default router;
