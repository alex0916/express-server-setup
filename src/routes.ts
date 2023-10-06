import { Router, type Request, type Response } from 'express';
import Client from './models/Client';

const router = Router();

router.get('/test', async (_req: Request, res: Response) => {
  const client = await Client.create({ name: 'Alex' });
  res.json({
    data: {
      id: client._id.toString(),
      name: client.name,
    },
  });
});

export default router;
