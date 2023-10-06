import mongoose from 'mongoose';
import logger from '../logger';

const connect = (): void => {
  void mongoose.connect(String(process.env.DATABASE_URL));
  const db = mongoose.connection;

  db.on('error', (error) => {
    logger.error(`MongoDB connection error ${error}`);
  });
  db.on('connected', () => {
    logger.debug('Connected to MongoDB');
  });
};

export default connect;
