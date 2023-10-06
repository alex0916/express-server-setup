import mongoose from 'mongoose';

const connect = async (): Promise<typeof mongoose> =>
  await mongoose.connect(String(process.env.DATABASE_URL));

export default connect;
