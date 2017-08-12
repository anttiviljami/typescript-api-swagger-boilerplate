import * as Hapi from 'hapi';
import * as winston from 'winston';
import * as inert from 'inert';
import * as vision from 'vision';
import * as swagger from 'hapi-swagger';

import routes from './routes';
import config from './config';

export async function serverInit(): Promise<Hapi.Server> {
  // set up the server
  const server = new Hapi.Server();
  server.connection({
    host: config.HOST,
    port: config.PORT,
  });

  // load our API routes
  server.route(routes);

  // register hapi plugins
  server.register([
    inert, // static files (hapi-swagger dependency)
    vision, // template rendering (hapi-swagger dependency)
    {
      register: swagger,
      options: {
        swaggerUI: true,
        documentationPage: true,
        consumes: ['application/json'],
        produces: ['application/json'],
        info: {
          title: 'Swagger API Example',
          version: '1.0.0',
        },
      },
    },
  ]);

  return server;
}
