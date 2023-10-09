import supertest from 'supertest';
import app from '../app';
import prisma from '../db/prisma';

const request = supertest(app);
const connect = () => prisma.$connect();
const close = () => prisma.$disconnect();

export { request, connect, close };
