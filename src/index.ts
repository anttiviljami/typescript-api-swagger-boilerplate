import * as Hapi from 'hapi';
import * as winston from 'winston';

import { serverInit } from './server';
import config from './config';

async function start() {
  const server = await serverInit();

  // start the server
  try {
    winston.info(`Server listening at ${config.HOST}:${config.PORT}`);
    await server.start();
  } catch (e) {
    winston.error(e);
  }
}

start();
