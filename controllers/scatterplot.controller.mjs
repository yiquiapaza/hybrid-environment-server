import {
  getAll,
  pushElement,
  clearScatteplotElement,
} from '../models/scatterplot.model.mjs';

export const getElement = (req, res) => {
  res.json(getAll());
};

export const addElement = (req, res) => {
  pushElement(req.body);
  res.sendStatus(200);
};

export const resetElement = (req, res) => {
  res.json(clearScatteplotElement());
};
