const mongoose = require('mongoose');

const connectDB = async () => {
  const mongoURI = process.env.MONGODB_URI;
  return mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
};

module.exports = connectDB;

