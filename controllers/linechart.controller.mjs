import { getAll, pushElement } from '../models/linechart.model.mjs';

export const getLinechart = (req, res) => {
    res.json(getAll());
}

export const addElement = (req, res) => {
    pushElement(req.body, req.query.task)
    res.sendStatus(200);
}
