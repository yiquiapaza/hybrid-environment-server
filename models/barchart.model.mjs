import { getTaskById } from './task.model.mjs';

let barElements = [];
let state = { active: false};

export const pushElement = (data, task) => {
  const _task = getTaskById(task);
  if (_task.selection < barElements.length + 1) {
    barElements.push(data);
    barElements.shift();
  } else barElements.push(data);
};

export const getAll = () => {
  return barElements;
};

export const saveState = () => {
  state = { active: false }
}

export const clearBarElement = () => {
  let temp = barElements;
  barElements = [];
  return temp;
}
export const reset = () => {
  if (state.active) {
    state.active = false;
  } else {
    barElements = [];
    state.active = true;
  }
  return state;
};
