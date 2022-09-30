import express from 'express';
import { z } from 'zod';

import * as trpcExpress from '@trpc/server/adapters/express';





async function main() {
    const app = express();
    app.listen(2021, () => console.log('listening on port 2021'));
}
main();
