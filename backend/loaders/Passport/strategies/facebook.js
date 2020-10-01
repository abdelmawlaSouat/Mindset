/*
 * facebook.js
 *
 * Author: Abdelmawla Souat (abdelmawla.souat@gmail.com)
 * Created on 2020/9/28 09:20:36
 *
 * Copyright (c) 2020 Shuriken
 */

const FacebookStrategy = require('passport-facebook').Strategy
const User = require('../../../models/User')

const FacebookAuth = new FacebookStrategy({
  clientID: process.env.FACEBOOK_CLIENT_ID,
  clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
  callbackURL: process.env.FACEBOOK_CALLBACK_URL,
  profileFields: ['id', 'displayName', 'name', 'email', 'picture']
}, async (accessToken, refreshToken, profile, callback) => {
  let user = await User.findOne({
    email: profile.emails[0].value
  })
  if (!user) {
    user = await new User({
      facebookID: profile.id,
      displayName: profile.displayName,
      givenName: profile.name.givenName,
      familyName: profile.name.familyName,
      email: profile.emails[0].value,
      picture: profile.photos[0].value
    }).save()
  }
  console.log(user)
  return callback(null, user)
})

module.exports = FacebookAuth
