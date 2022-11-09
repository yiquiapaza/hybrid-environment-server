import { getAll } from '../models/barchartModel.mjs';

export const getBarchart = async (req, res) => {
  res.json(JSON.parse(await getAll()));
}

