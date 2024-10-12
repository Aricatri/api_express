import { Router, Request, Response } from 'express';
import { Person } from '../models/person';

const router = Router();

let persons: Person[] = [
  { id: 1, name: "Juan Peres", number: "99123456" },
  { id: 2, name: "Maria Ramos", number: "925323523" },
  { id: 3, name: "Pedro Gonzales", number: "95234345" },
  { id: 4, name: "Jose Guzman", number: "926423122" },
];

router.get('/', (req: Request, res: Response) => {
  res.json(persons);
});

router.get('/:id', (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const person = persons.find(p => p.id === id);
  if (person) {
    res.json(person);
  } else {
    res.status(404).send({ error: 'Person not found' });
  }
});

router.post('/', (req: Request, res: Response) => {
  const { name, number } = req.body;
  if (!name || !number) {
    return res.status(400).json({ error: 'Name or number is missing' });
  }
  const newPerson: Person = {
    id: Math.floor(Math.random() * 10000),
    name,
    number
  };
  persons.push(newPerson);
  res.status(201).json(newPerson);
});

router.delete('/:id', (req: Request, res: Response) => {
  const id = Number(req.params.id);
  persons = persons.filter(p => p.id !== id);
  res.status(204).end();
});

export default router;
