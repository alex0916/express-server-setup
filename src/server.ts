import dotenv from 'dotenv';
import logger from './logger';
import mongodb from './db/mongodb';
import app from './app';

dotenv.config();

const port = process.env.PORT;

mongodb()
  .then(() => {
    logger.debug('Connected to MongoDB');
    app.listen(port, () => {
      logger.info(`Server is running at http://localhost:${port}`);
    });
  })
  .catch((error) => {
    logger.error(`MongoDB connection error ${error}`);
  });
