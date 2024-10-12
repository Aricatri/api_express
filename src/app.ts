import express from 'express';
import cors from 'cors';
import { logger } from './middleware/logger';
import personsRouter from './routes/persons';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());
app.use(logger);

app.use('/api/persons', personsRouter);

app.get('/info', (req, res) => {
  const date = new Date();
  const message = `
    <p>Phonebook has info for ${persons.length} people</p>
    <p>${date}</p>
  `;
  res.send(message);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
