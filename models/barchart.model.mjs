import { getTaskById } from './task.model.mjs';

const barElements = [];

export const saveBarElement = (data, task) => {
  const _task = getTaskById(task);
  if (_task.selection < barElements.length + 1) {
    barElements.push(data);
    barElements.shift();
  }
  else
    barElements.push(data);
};


export const getAll =  () => {
  return barElements;
};
