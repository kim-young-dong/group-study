const { Schema } = require('mongoose');
const db = require('../mongo');

const schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  avatar: { type: String, required: true },
  createdAt: { type: Date, default: Date.now() },
  id: Schema.Types.ObjectId,
});



module.exports = db.model('User', schema)