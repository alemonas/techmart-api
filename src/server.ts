import express from 'express';
import router from './router';
import morgan from 'morgan';
import cors from 'cors';
import { protect } from './modules/auth';
import { createUser, signin } from './handlers/user';

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.status(200);
  res.json({ message: 'Hello from API' });
});

app.use('/api', protect, router);
app.post('/user', createUser);
app.post('/signin', signin);

export default app;
