import fs from 'fs';

export const getBarchart = async (req, res) => {
  try {
    const data = await fs.promises.readFile('../data/metadata-barchart.json', 'utf8');
    return data;
  } catch (error) {
    console.log(error);
    return;
  }
}

