import express from 'express';
import {  position, setPosition } from '../controllers/position.controller.mjs';

const router = express.Router();

router.get('/', position);
router.post('/', setPosition);

export default router;
