import express from 'express';

const router = express.Router();

router.get('/', (req, res) =>{
  console.log("Scatterplot");
  res.sendStatus(200);
});

router.post('/desktop', (req, res) => {
  console.log("Scatterplot desktop");
  res.sendStatus(200);
});

router.post('/hololens', (req, res) => {
  console.log("Scatterplot hololens");
  res.sendStatus(200);
});

export default router;
