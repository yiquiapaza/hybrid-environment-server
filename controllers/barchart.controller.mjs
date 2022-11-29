import { getAll, getByTasks, saveBarElement } from '../models/barchart.model.mjs';

export const getBarchart = (req, res) => {
  res.json(getAll());
}

export const saveElement = (req, res) => {
  saveBarElement(req.body)
  res.sendStatus(200);
}

export const getBarchartByTask = async (req, res) => {
  console.log(req.query.task)
  res.json(getByTasks(req.query.task));
}
