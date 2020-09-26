const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  googleID: {
    type: String
  },
  facebookID: {
    type: String
  },
  mailToken: {
    type: String
  },
  displayName: {
    type: String,
    // required: true
  },
  givenName: {
    type: String,
    // required: true
  },
  familyName: {
    type: String,
    // required: true
  },
  email: {
    type: String
  },
  picture: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },

})

module.exports = mongoose.model('User', UserSchema)