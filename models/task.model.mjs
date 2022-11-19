import path from 'path';
import fs from 'fs';
import __dir from '../utils/path.util.mjs';

const pathMetadata = path.join(__dir, "data", "task.json");

export const getBarchartTasks = async () => {
    try {
        const data = await fs.promises.readFile(pathMetadata, 'utf8');
        return data
    } catch (error) {
        console.log(error);
    }
}
