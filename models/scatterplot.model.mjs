import { getTaskById } from "./task.model.mjs";

const scatterElements = [];

export const getAll = async () => {
    return scatterElements;
}

export const pushElement = (data, task) => {
    const _task = getTaskById(task);
    if (_task.selection < scatterElements.length + 1) {
        scatterElements.push(data);
        scatterElements.shift();
    }
    else
        scatterElements.push(data);
};
