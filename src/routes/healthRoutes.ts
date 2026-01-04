import { Router, Request, Response } from 'express';
import { prisma } from '../lib/db';

const router = Router();

router.get('/', async (_req: Request, res: Response) => {
  try {
    // Test database connection
    await prisma.$queryRaw`SELECT 1`;
    
    res.status(200).json({
      status: 'OK',
      message: 'TrueBite QR API is running',
      timestamp: new Date().toISOString(),
      database: 'connected',
    });
  } catch (error) {
    res.status(500).json({
      status: 'ERROR',
      message: 'Database connection failed',
      timestamp: new Date().toISOString(),
    });
  }
});

export default router;
