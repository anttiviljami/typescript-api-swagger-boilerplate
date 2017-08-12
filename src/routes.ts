import * as Hapi from 'hapi';

const routes: Hapi.RouteConfiguration[] = [
  {
    method: 'GET',
    path: '/test',
    config: {
      tags: ['api'],
    },
    handler: (req: Hapi.Request, reply: Hapi.ReplyNoContinue) => reply({ test: 'ok' }),
  },
];

export default routes;
