import { getScatterplotTasks } from "./task.model.mjs";

import path from 'path';
import fs from 'fs';
import __dir from "../utils/path.util.mjs";

const pathMetadata = path.join(__dir, 'data', "metadata-scatterplot.json");

export const getAll = async () => {
    try {
        const data = await fs.promises.readFile(pathMetadata, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.log(error);
    }
}

export const addElement = async (data) => {
    let element = [];
    try {
        let elements = await getAll();
        console.log(elements);
       //element = elements.find(item => item.id === data.id);
    } catch (error) {
        console.log(error)
    }
};

export const getByStatus = async (task) => {
    const tasks = await getScatterplotTasks();
    let elements = [];
    const _task = tasks.find(item => item.task === Number(task));
    console.log(_task);
    try {
        elements = JSON.parse( await fs.promises.readFile(pathMetadata, 'utf8'));
        return elements;
    } catch (error) {
        console.log(error);
    }
}
