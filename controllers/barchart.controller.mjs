import {
  getAll,
  pushElement,
  reset,
  saveState,
} from '../models/barchart.model.mjs';

export const getBarchart = (req, res) => {
  res.json(getAll());
};

export const addElement = (req, res) => {
  pushElement(req.body, req.query.task);
  res.sendStatus(200);
};

export const state = (req, res) => {
  res.json();
};

export const setState = (req, res) => {
  saveState(req.body);
  res.sendStatus(200);
};

export const getReset = (req, res) => {
  res.json(reset());
};
