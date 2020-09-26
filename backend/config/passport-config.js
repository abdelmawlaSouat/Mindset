const User = require('../models/User')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const FacebookStrategy = require('passport-facebook').Strategy
const LocalStrategy = require('passport-local').Strategy


module.exports = (passport) => {

  passport.serializeUser((user, callback) => {
    console.log('AZE');
    callback(null, user.id)
  })

  passport.deserializeUser((id, callback) => {
    console.log('VFG');
    User.findById(id).then( user => {
      callback(null, user)
    }).catch(err => {
      callback(err, null)
    }
    )
  })

  // GOOGLE
  passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: '/api/auth/google/callback'
  },
    async (accessToken, refreshToken, profile, callback) => {
      console.log(profile);
      let user = await User.findOne({
        googleID: profile._json.sub
      })
      if (!user) {
        user = await new User({
          googleID: profile.id,
          displayName: profile.displayName,
          givenName: profile.name.givenName,
          familyName: profile.name.familyName,
          email: profile.emails[0].value,
          picture: profile.photos[0].picture
        }).save()
      }
      return callback(null, user)
    }
  ))

  // Facebook
  passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    callbackURL: '/api/auth/facebook/callback',
    profileFields: ['id','displayName','name','email', 'picture']
  },
    async (accessToken, refreshToken, profile, callback) => {
      console.log(profile);
      let user = await User.findOne({
        facebookID: profile.id
      })
      if (!user) {
        user = await new User({
          facebookID: profile.id,
          displayName: profile.displayName,
          givenName: profile.name.givenName,
          familyName: profile.name.familyName,
          email: profile.emails[0].value,
          picture: profile.photos[0].value,
        }).save()
      }
      return callback(null, user)
    }
  ))

  // Email
  passport.use(new LocalStrategy(
    async (email, password, callback) => {
      let user = await User.findOne({ 
        email: email
      }).then(user => {
        return callback(null, user)
      }).catch(err => {
        return callback(err)
      })
      // if (!user) {
      //   user = await new User({
      //     displayName: email.split('@')[0],
      //     email: email,
      //   }).save()
      // }
      
    }
  ))

}