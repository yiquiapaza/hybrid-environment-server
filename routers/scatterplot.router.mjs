import express from 'express';
import { postScatterplotElement } from '../controllers/scatterplot.controller.mjs';

const router = express.Router();

router.get('/', (req, res) =>{
  console.log("Scatterplot");
  res.sendStatus(200);
});

router.post('/desktop', postScatterplotElement);

router.post('/hololens', (req, res) => {
  console.log("Scatterplot hololens");
  res.sendStatus(200);
});

export default router;
