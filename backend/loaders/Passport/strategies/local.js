/*
 * local.js
 *
 * Author: Abdelmawla Souat (abdelmawla.souat@gmail.com)
 * Created on 2020/9/28 09:21:16
 *
 * Copyright (c) 2020 Shuriken
 */

const LocalStrategy = require('passport-local').Strategy
const User = require('../../../models/User')

const LocalAuth = new LocalStrategy(
  async (email, password, callback) => {
    await User.findOne({
      email: email
    }).then(user => {
      return callback(null, user)
    }).catch(err => {
      return callback(err)
    })
  }
)

module.exports = LocalAuth
