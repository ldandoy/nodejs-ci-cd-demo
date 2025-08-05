import request from 'supertest';
import app from '../app/app.js';

describe('GET /', () => {
  it('should return hello message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ message: 'Hello from Express in Docker!' });
  });
});