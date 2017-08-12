import 'mocha';
import * as chai from 'chai';

import { serverInit } from '../src/server';

chai.should();

describe('api', function describe() {
  // requests > 200ms are flagged "slow"
  this.slow(200);

  beforeEach(function beforeEach() {
    // it blocks that take more than 10s are considered failed
    return this.timeout(10000);
  });

  it('should return a swagger json', async function swagger() {
    const server = await serverInit();
    await server.initialize();

    const response = await server.inject({
      method: 'GET',
      url: '/swagger.json',
    });

    const { result } = response;
    result.should.have.property('swagger');
  });
});
