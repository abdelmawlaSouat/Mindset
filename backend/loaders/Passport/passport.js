/*
 * passport.js
 *
 * Author: Abdelmawla Souat (abdelmawla.souat@gmail.com)
 * Created on 2020/9/28 09:17:57
 *
 * Copyright (c) 2020 Shuriken
 */

const User = require('../../models/User')

const passportLoader = (passport) => {
  passport.use(require('./strategies/local'))
  passport.use(require('./strategies/google'))
  passport.use(require('./strategies/facebook'))
  passport.serializeUser((user, callback) => {
    callback(null, user.id)
  })
  passport.deserializeUser((id, callback) => {
    User.findById(id).then(user => {
      callback(null, user)
    }).catch(err => {
      callback(err, null)
    })
  })
}

module.exports = passportLoader
