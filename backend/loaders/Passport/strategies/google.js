/*
 * google.js
 *
 * Author: Abdelmawla Souat (abdelmawla.souat@gmail.com)
 * Created on 2020/9/28 09:22:15
 *
 * Copyright (c) 2020 Shuriken
 */

const GoogleStrategy = require('passport-google-oauth20').Strategy
const User = require('../../../models/User')

const GoogleAuth = new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: process.env.GOOGLE_CALLBACK_URL
}, async (accessToken, refreshToken, profile, callback) => {
  let user = await User.findOne({
    email: profile.emails[0].value
  })
  if (!user) {
    user = await new User({
      googleID: profile.id,
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

module.exports = GoogleAuth
