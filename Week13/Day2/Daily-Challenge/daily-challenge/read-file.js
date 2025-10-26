import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

// Resolves __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Reads and returns content from file-data.txt
export async function readFileContent() {
  try {
    const filePath = path.join(__dirname, 'files', 'file-data.txt');
    const data = await fs.readFile(filePath, 'utf8');
    console.log('File Content:\n' + data);
  } catch (err) {
    console.error('Error reading file:', err.message);
  }
}