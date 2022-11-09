import path from 'path';
import { fileURLToPath } from 'url';

const __fileName = fileURLToPath(import.meta.url);
let __dir = path.join(__fileName, '..');
__dir = path.dirname(__dir)
export default __dir;
