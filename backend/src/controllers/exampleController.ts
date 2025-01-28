import { Request, Response } from 'express';

const getExample = (req: Request, res: Response): void => {
  res.json({ message: 'Hello from the backend!' });
};

export default { getExample };
