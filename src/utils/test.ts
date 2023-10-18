import mongoose from 'mongoose';
import supertest from 'supertest';
import app from '../app';
import connect from '../db/mongodb';

const request = supertest(app);
const close = async (): Promise<void> => {
  await mongoose.connection.close();
};

export { request, connect, close };
