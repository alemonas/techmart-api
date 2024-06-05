import express from 'express';
import path from 'path';

const app = express();

app.use(express.static('static'));

app.get('/', (req, res) => {
  return res.json({message: 'Hello from the API!'})
});

export default app;
