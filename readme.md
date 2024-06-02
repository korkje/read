# read [![JSR](https://jsr.io/badges/@korkje/read)](https://jsr.io/@korkje/read)

Read all text from stdin.

```ts
import read from "jsr:@korkje/read";

const input = await read();
```

Or read chunks individually.

```ts
import { readChunks } from "jsr:@korkje/read";

for await (const chunk of readChunks()) {
    // ...
}
```
