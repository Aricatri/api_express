import morgan from 'morgan';
import { Request } from 'express';

morgan.token('body', (req: Request) => JSON.stringify(req.body));
export const logger = morgan(':method :url :status :res[content-length] - :response-time ms :body');
