import { spawn, ChildProcess } from 'child_process';

import process from 'process';

const promisifyProcess = async (childProcess: ChildProcess) => {
    return new Promise((resolve, reject) => {
        childProcess.once('exit', (code: number, signal: string) => {
            if (code === 0) {
                resolve(undefined);
            } else {
                reject(new Error(`Exit with error code: ${code}`));
            }
        });
        childProcess.once('error', (error: Error) => {
            reject(error);
        });
    });
};

const publishProcess = spawn(process.platform.startsWith('win') ? 'npm.cmd' : 'npm', ['publish'], {
    cwd: './dist',
    stdio: [process.stdin, process.stdout, process.stderr],
});

await promisifyProcess(publishProcess);
