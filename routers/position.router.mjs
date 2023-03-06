import express from 'express';
import { getReset, position, setPosition } from '../controllers/position.controller.mjs';

const router = express.Router();

router.get('/', position);
router.get('/restar', getReset)
router.post('/', setPosition);

export default router;
