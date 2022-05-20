type Pair<T, V> = [T, V];

type Stats<V> = {
    total: number;
    failed: number;
    succeed: number;
    output: V[];
};

export const runConcurrently = async <T, V>(
    data: T[],
    exec: (value: T) => Promise<V>,
    concurrency = 5,
): Promise<Stats<V>> => {
    const output: V[] = Array.from({ length: data.length });

    const queue: Array<Pair<T, number>> = data.map((value, index) => [value, index]);

    let currentlyRunning = 0;
    let total = 0;
    let succeed = 0;
    let failed = 0;

    await new Promise<void>((resolve) => {
        const enqueue = () => {
            while (currentlyRunning < concurrency && queue.length > 0) {
                const [value, index] = queue.shift();
                ++total;
                exec(value)
                    .then((result) => {
                        output[index] = result;
                        ++succeed;
                    })
                    .catch((error) => {
                        console.error(error);
                        ++failed;
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

    return {
        total,
        failed,
        succeed,
        output,
    };
};
