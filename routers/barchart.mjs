import express from 'express';
import { getBarchart } from '../controllers/barchartController.mjs'

const router = express.Router();

router.get('/', getBarchart);

router.post('/desktop', (req, res) => {
    console.log("Barchart POST desktop");
    res.sendStatus(200);
});

router.post('/hololens', (req, res) => {
    console.log("Barchart POST hololens");
    res.sendStatus(200)
});

export default router;
