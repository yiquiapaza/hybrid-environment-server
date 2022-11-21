import { getAll, getByStatus, addElement } from "../models/scatterplot.model.mjs";

export const get = async (req, res) => {
    res.json(await getAll());
}

export const postScatterplotElement = async (req, res) => {
    addElement(res.query);
    res.sendStatus(200);
}

export const getScatterplotByStatus = async (req, res) => {
    res.json(await getByStatus(req.query.task));
}
