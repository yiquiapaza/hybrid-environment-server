import { getBarchartTasks } from './task.model.mjs';

import path from 'path';
import fs from 'fs';
import __dir from '../utils/path.util.mjs';

const pathMetadata = path.join(__dir, "data", "metadata-barchart.json");

export const getAll = async () => {
    try {
        const data = await fs.promises.readFile(pathMetadata, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.log(error);
    }
};

export const getByStatus = async (task) => {
  const tasks = JSON.parse( await getBarchartTasks());
  let elements = [];
  const _task = tasks.find(item => item.task === Number(task));
  try {
    elements =JSON.parse( await fs.promises.readFile(pathMetadata, 'utf-8'));
    //elements = elements.filter(item => item.status === 0);
    console.log(elements);
    return elements;
  } catch (error) {
    console.log(error);
  }
}
