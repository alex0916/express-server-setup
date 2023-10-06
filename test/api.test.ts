import { request, connect, close } from './setup';

beforeAll(async () => {
  await connect();
});

afterAll(async () => {
  await close();
});

describe('api/', () => {
  it('should work', async () => {
    const result = await request.get('/api/test');
    expect(result.body).toEqual({
      data: {
        id: expect.any(String),
        name: expect.any(String),
      },
    });
  });
});
