import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const srcDir = path.join(path.dirname(new URL(import.meta.url).pathname), '..', 'src');
const outputFile = path.join(
  path.dirname(new URL(import.meta.url).pathname),
  '..',
  'merged-src.txt'
);

function isIgnored(filePath) {
  try {
    execSync(`git check-ignore "${filePath}"`, { stdio: 'pipe' });
    return true;
  } catch (error) {
    return false;
  }
}

function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach(file => {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
    } else {
      if (!isIgnored(fullPath)) {
        arrayOfFiles.push(fullPath);
      }
    }
  });

  return arrayOfFiles;
}

const allFiles = getAllFiles(srcDir);

let output = '';

allFiles.forEach(file => {
  const relativePath = path.relative(
    path.join(path.dirname(new URL(import.meta.url).pathname), '..'),
    file
  );
  const header = `=== START OF FILE: ${relativePath} ===\n`;
  const footer = `\n=== END OF FILE: ${relativePath} ===\n\n`;
  const content = fs.readFileSync(file, 'utf8');
  output += header + content + footer;
});

fs.writeFileSync(outputFile, output);

console.log(`Merged ${allFiles.length} files into ${outputFile}`);
