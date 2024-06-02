/**
 * Read text from stdin in chunks.
 */
export async function* readChunks(): AsyncGenerator<string> {
    const decoder = new TextDecoder();

    for await (const chunk of Deno.stdin.readable) {
        yield decoder.decode(chunk);
    }
}

/**
 * Read text from stdin.
 */
export async function read(): Promise<string> {
    const chunks: string[] = [];

    for await (const chunk of readChunks()) {
        chunks.push(chunk);
    }

    return chunks.join("");
}

export default read;
