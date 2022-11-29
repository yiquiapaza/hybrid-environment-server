import { getTaskById } from './task.model.mjs';

const lineElements = [];

export const pushElement = (data, task) => {
    const _task = getTaskById(task);
    if (_task.selection < lineElements.length + 1) {
        lineElements.push(data);
        lineElements.shift();
    }
    else
        lineElements.push(data);
};


export const getAll =  () => {
    return lineElements;
};
