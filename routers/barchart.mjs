import express from 'express';

const router = express.Router();

router.get('/', (req, res) =>{
    console.log("Barchart GET");
    res.sendStatus(200);
});

router.post('/desktop', (req, res) => {
    console.log("Barchart POST desktop");
    res.sendStatus(200);
});

router.post('/hololens', (req, res) => {
    console.log("Barchart POST hololens");
    res.sendStatus(200)
});

export default router;
