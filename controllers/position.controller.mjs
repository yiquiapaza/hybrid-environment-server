import { getPostion, reset, savePostion } from '../models/position.model.mjs';

export const position = (req, res) => {
  res.json(getPostion());
};

export const setPosition = (req, res) => {
  savePostion(req.body);
  res.sendStatus(200);
};

export const getReset = (req, res) => {
  res.json(reset());
};
