import { getAll, getByStatus } from "../models/scatterplot.model.mjs";

export const get = async (req, res) => {
    res.json(await getAll());
}

export const postScatterplotElement = async (req, res) => {

}

export const getScatterplotByStatus = async (req, res) => {
    res.json(await getByStatus(req.query.task));
}
