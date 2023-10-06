import mongoose from 'mongoose';

const ClientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const Client = mongoose.model('Client', ClientSchema);

export default Client;
