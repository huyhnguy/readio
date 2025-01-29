import express, { Application } from 'express';
import routes from './routes';
import cors from 'cors';

const app: Application = express();

app.use(cors());

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', routes);

export default app;
