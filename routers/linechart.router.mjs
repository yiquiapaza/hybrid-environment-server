import express from 'express';
import { getLinechart, addElement} from '../controllers/linechart.controller.mjs';

const router = express.Router();

router.get('/', getLinechart);

router.post('/desktop', addElement);

router.post('/hololens', addElement);

export default router;
