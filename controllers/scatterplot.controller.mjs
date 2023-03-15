import {
  getAll,
  pushElement,
  clearScatteplotElement,
} from '../models/scatterplot.model.mjs';

export const getElement = (req, res) => {
  res.json(getAll());
};

export const addElement = (req, res) => {
  pushElement(res.body, req.query.task);
  res.sendStatus(200);
};

export const resetElement = (resq, res) => {
  res.json(clearScatteplotElement());
};
