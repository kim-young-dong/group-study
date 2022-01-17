var mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

const { MONGODB_USERNAME, MONGODB_PASSWORD, MONGODB_URI } = process.env

const db = mongoose.createConnection(
  MONGODB_URI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    auth: {
      authSource: 'admin'
    },
    user: MONGODB_USERNAME,
    pass: MONGODB_PASSWORD,
  }
);

mongoose.set('useFindAndModify', false);

module.exports = db