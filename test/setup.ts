import mongoose from 'mongoose';
import supertest from 'supertest';
import app from '../src/app';
import connect from '../src/db/mongodb';

const request = supertest(app);
const close = () => mongoose.connection.close();

export { request, connect, close };
