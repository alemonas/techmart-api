import express from 'express';

const app = express();

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.status(200);
  res.json({ message: 'Hello from API' });
});

export default app;
