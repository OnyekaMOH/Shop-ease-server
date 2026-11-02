// src/server.ts
import { env } from "./config/env.config.ts";
import { createApp } from "./app.ts";
import { logger } from "./lib/logger.ts";

const app = createApp();

app.listen(env.port, () => {
  logger.info(`Server running on http://localhost:${env.port}`);
});
