import dotenv from 'dotenv';
import logger from './logger';
import mongodb from './db/mongodb';
import app from './app';

dotenv.config();

const port = process.env.PORT;

mongodb();

app.listen(port, () => {
  logger.info(`Server is running at http://localhost:${port}`);
});
