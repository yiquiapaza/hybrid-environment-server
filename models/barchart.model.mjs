import { getBarchartTasks } from './task.model.mjs';

const barElements = [];
const scatterElements = [];

export const saveBarElement = (data) => {
  barElements.push(data);
};

export const saveScatterElement = (data) => {
  scatterElements.push(data);
};

export const getAll =  () => {
  return barElements;
};

export const getByTasks = (task) => {
  const tasks = getBarchartTasks();
  const _task = tasks.find(item => item.task === Number(task));
  console.log(_task);
  return barElements;
}
