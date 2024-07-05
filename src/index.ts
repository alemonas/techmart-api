import * as dotenv from 'dotenv';
dotenv.config();

import app from './server';

const PORT = 5001;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
