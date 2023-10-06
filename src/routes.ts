import { Router, type Request, type Response } from 'express';

const router = Router();

router.get('/test', async (_req: Request, res: Response) => {
  res.json({
    data: 'Express + TypeScript Server',
  });
});

export default router;
