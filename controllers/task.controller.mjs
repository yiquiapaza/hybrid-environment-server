import { getBarchartTask01 } from '../models/task.model.mjs';

export const getBarchartTas01 = async (req, res) => {
    res.json(JSON.parse(await getBarchartTask01()));
}
