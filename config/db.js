const mongoose = require('mongoose');
const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI_LOCAL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true
    });
    console.log(`MongoDB Connected ${conn.connection.host}`.yellow);
    
  } catch (error) {
    console.error(`Error : ${error.message}`.red);
    process.exit(1);
  }
};
module.exports = connectDb;