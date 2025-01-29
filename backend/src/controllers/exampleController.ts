import { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';

const getExample = (req: Request, res: Response): void => {
  res.json({ message: 'Hello from the backend!' });
};

const postLogin = (req: Request, res: Response): void => {
    console.log(req.body);
    res.json({ message: 'Hello from the backend!' });
  };

export default { getExample, postLogin };
