import express from 'express';
import { getBarchart, getBarchartByTask, saveElement } from '../controllers/barchart.controller.mjs'

const router = express.Router();

router.get('/', getBarchart);

router.post('/desktop', saveElement);

router.post('/hololens', (req, res) => {
    console.log("Barchart POST hololens");
    res.sendStatus(200)
});

router.get('/status', getBarchartByTask)

export default router;
