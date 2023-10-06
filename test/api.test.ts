import request from './setup';

describe('api/', () => {
  it('should work', async () => {
    const result = await request.get('/api/test');
    expect(result.body).toEqual({ data: 'Express + TypeScript Server' });
  });
});
