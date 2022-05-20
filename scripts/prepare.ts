import { readFile, writeFile, copyFile } from 'fs/promises';

const packageSource = await readFile('package.json');
const parsedPackage = JSON.parse(packageSource.toString());

delete parsedPackage.devDependencies;

await writeFile('./dist/package.json', JSON.stringify(parsedPackage, null, 4));
await copyFile('LICENSE', './dist/LICENSE');
await copyFile('README.md', './dist/README.md');
