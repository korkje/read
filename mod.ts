export async function* readChunks() {
    const decoder = new TextDecoder();

    for await (const chunk of Deno.stdin.readable) {
        yield decoder.decode(chunk);
    }
}

export async function read() {
    const chunks: string[] = [];

    for await (const chunk of readChunks()) {
        chunks.push(chunk);
    }

    return chunks.join("");
}

export default read;
