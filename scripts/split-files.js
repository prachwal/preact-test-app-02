import fs from 'fs';
import path from 'path';

const inputFile = path.join(
  path.dirname(new URL(import.meta.url).pathname),
  '..',
  'merged-src.txt'
);
const baseDir = path.join(path.dirname(new URL(import.meta.url).pathname), '..');

const content = fs.readFileSync(inputFile, 'utf8');

const sections = content.split('# ===== ').slice(1); // Skip first empty

let count = 0;

sections.forEach(section => {
  const lines = section.trim().split('\n');
  const pathLine = lines[0];
  const filePath = pathLine.replace(' =====', '');
  const fileContent = lines.slice(1).join('\n');

  const fullPath = path.join(baseDir, filePath);
  const dir = path.dirname(fullPath);

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(fullPath, fileContent);
  count++;
});

console.log(`Split into ${count} files.`);
