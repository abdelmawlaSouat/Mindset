/*
 * User.js
 *
 * Author: Abdelmawla Souat (abdelmawla.souat@gmail.com)
 * Created on 2020/9/28 18:02:59
 *
 * Copyright (c) 2020 Shuriken
 */

const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  googleID: {
    type: String
  },
  facebookID: {
    type: String
  },
  mailToken: {
    type: String,
    default: ''
  },
  displayName: {
    type: String,
    required: true
  },
  givenName: {
    type: String
  },
  familyName: {
    type: String
  },
  email: {
    type: String
  },
  picture: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('User', UserSchema)
