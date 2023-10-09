import dotenv from 'dotenv';
import logger from './logger';
import app from './app';

dotenv.config();

const port = process.env.PORT;

app.listen(port, () => {
  logger.info(`Server is running at http://localhost:${port}`);
});
