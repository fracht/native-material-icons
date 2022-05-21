import { readdir, stat } from 'fs/promises';
import { extname } from 'path';
import { runConcurrently } from './runConcurrently';

const files = await readdir('./dist');

const getFileSize = async (file: string): Promise<number | undefined> => {
    if (extname(file) !== '.js') {
        return undefined;
    }

    const fileStats = await stat(`./dist/${file}`);

    return fileStats.size;
};

const { output } = await runConcurrently(files, getFileSize);

const normalSizes = output.filter(Boolean) as number[];

const totalSize = normalSizes.reduce((total, a) => a + total);

console.log(`Average icon size is: ${(totalSize / normalSizes.length).toFixed(2)} bytes`);
