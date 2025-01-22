import express from 'express';
import bodyParser from 'body-parser';

const app = express();

import todoRoutes from './routes/todo';

app.use(bodyParser.json());

app.use(todoRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
