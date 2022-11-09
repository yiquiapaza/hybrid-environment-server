import { getAll } from '../models/barchart.model.mjs';

export const getBarchart = async (req, res) => {
  res.json(JSON.parse(await getAll()));
}

