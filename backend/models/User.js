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
  googleID: { type: String },
  facebookID: { type: String },
  mailToken: { type: String, default: '' },
  displayName: { type: String, required: true },
  givenName: { type: String, default: '' },
  familyName: { type: String, default: '' },
  email: { type: String, required: true },
  bio: { type: String, default: '' },
  avatar: { type: String, default: '' },
  newsletters: { type: Boolean, default: true },
  socialNotification: { type: Boolean, default: true },
  activated: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('User', UserSchema)
