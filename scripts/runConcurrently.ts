type Pair<T, V> = [T, V];

export const runConcurrently = async <T, V>(
    data: T[],
    exec: (value: T) => Promise<V>,
    concurrency = 5,
): Promise<V[]> => {
    const output: V[] = Array.from({ length: data.length });

    const queue: Array<Pair<T, number>> = data.map((value, index) => [value, index]);

    let currentlyRunning = 0;

    await new Promise<void>((resolve) => {
        const enqueue = () => {
            while (currentlyRunning < concurrency && queue.length > 0) {
                const [value, index] = queue.shift();

                exec(value)
                    .then((result) => {
                        output[index] = result;
                    })
                    .catch((error) => {
                        console.error(error);
                    })
                    .finally(() => {
                        --currentlyRunning;
                        enqueue();
                    });

                ++currentlyRunning;
            }

            if (queue.length === 0) {
                resolve();
            }
        };

        enqueue();
    });

    return output;
};
