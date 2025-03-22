export const prompt = async (text: string, interval: number): Promise<string> => {
    
    if (typeof text != "string") {
        throw new TypeError('The "text" parameter must be a string.');
    }

    if (typeof interval !== "number" || interval <= 0) {
        throw new RangeError('The "interval" must be a positive number.');
    }
    
    return new Promise(async (resolve) => {
        for (const c of text) {
            process.stdout.write(c);
            await new Promise<void>(resolve => setTimeout(resolve, interval));
        }
        process.stdin.resume();
        process.stdin.once("data", (data) => {
            process.stdin.pause();
            resolve(data.toString().trim());
        });
    });
};
