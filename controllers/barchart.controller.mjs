import { getAll, saveBarElement } from '../models/barchart.model.mjs';

export const getBarchart = (req, res) => {
  res.json(getAll());
}

export const saveElement = (req, res) => {
  saveBarElement(req.body, req.query.task)
  res.sendStatus(200);
}

