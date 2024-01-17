import request from 'supertest';
import app from '../server/server';

describe('Server Route testing', () => {
  describe('Unkown route test', () => {
    it('should return status 404 for GET to unkonwn endpoints', async () => {
      const res = await request(app).get('/nonexistantroute');
      expect(res.statusCode).toBe(404);
    });
  });

  describe('Check User route test', () => {
    it('should return status 200 and user info for a valid user', async () => {
      const res = await request(app)
        .post('/api/checkuser')
        .send({ email: 'ashketchum@gmail.com' });
      expect(res.statusCode).toBe(200);
    });
  });
});
