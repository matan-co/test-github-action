const supertest = require('supertest');
const app = require('./index');


describe('GET /', () => {
  it('should return 200', (done) => {
    supertest(app)
      .get('/')
      .expect(200, done);
  });
});