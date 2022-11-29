import { getAll, pushElement } from "../models/scatterplot.model.mjs";

export const getElement = (req, res) => {
    res.json(getAll());
}

export const addElement = (req, res) => {
    pushElement(res.body, req.query.task);
    res.sendStatus(200);
}
