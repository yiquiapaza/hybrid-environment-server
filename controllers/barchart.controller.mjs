import {
  getAll,
  pushElement,
  clearBarElement,
} from '../models/barchart.model.mjs';

export const getBarchart = (req, res) => {
  res.json(getAll());
};

export const addElement = (req, res) => {
  pushElement(req.body, req.query.task);
  res.sendStatus(200);
};

export const resetElement = (req, res) => {
  res.json(clearBarElement());
};
