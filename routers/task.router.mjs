import express from 'express';

const router = express.Router();

router.get('/barchart01', (res, req) => {
    console.log("Task1");
    req.sendStatus(200);
})

router.get('/barchar02', (res, req) => {
    console.log("Task2");
    req.sendStatus(200);
})

router.get('/barchar03', (res, req) => {
    console.log("Task03");
    req.sendStatus(200);
})

export default router;
