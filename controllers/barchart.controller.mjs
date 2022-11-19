import { getAll, getByStatus } from '../models/barchart.model.mjs';

export const getBarchart = async (req, res) => {
  res.json(await getAll());
}

export const getBarchartByTask = async (req, res) => {
  res.json(await getByStatus(req.query.task));
}
