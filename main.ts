import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const source = join(import.meta.dirname, 'entry.png');
const outputDirectory = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const destination = join(outputDirectory, 'entry.png');

mkdirSync(outputDirectory, { recursive: true });
copyFileSync(source, destination);

if (statSync(destination).size !== statSync(source).size) {
  throw new Error(`Copied image has a different byte length: ${destination}`);
}
