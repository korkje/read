# read

Read all text from stdin.

```ts
import read from "https://deno.land/x/read/mod.ts";

const input = await read();
```

Or read chunks individually.

```ts
import { readChunks } from "https://deno.land/x/read/mod.ts";

for await (const chunk of readChunks()) {
    // ...
}
```
