import express from 'express';
import router from './router';

const app = express();

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.status(200);
  res.json({ message: 'Hello from API' });
});

app.use('/api', router);

export default app;
