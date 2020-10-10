/*
 * Authentication.js
 *
 * Author: Abdelmawla Souat (abdelmawla.souat@gmail.com)
 * Created on 2020/9/28 13:42:38
 *
 * Copyright (c) 2020 Shuriken
 */

const Mailer = require('../services/Mailer')
const mailService = new Mailer()
const TokenGenerator = require('uuid-token-generator')
const User = require('../models/User')

class Authentication {
  /**
   * @param  {object} req
   * @param  {object} res
   * @param  {object} next
   */
  findOrCreateUser (req, res, next) {
    User.findOne({
      email: req.body.email
    }).then((user) => {
      const authToken = new TokenGenerator(256, TokenGenerator.BASE62).generate()
      if (!user) {
        user = new User({
          mailToken: authToken,
          email: req.body.email,
          displayName: req.body.email.split('@')[0]
        })
        user.save().then(() => {
          res.status(201).json({
            message: 'User created.'
          })
        }).catch(err => res.json({ err }))
      } else {
        User.updateOne(
          { email: req.body.email },
          { mailToken: authToken }
        ).then(user => res.status(201).json({
          message: 'New Token created.'
        })
        ).catch(err => res.json({ err }))
      }
    }).then(async () => {
      const user = await User.findOne({ email: req.body.email })
      mailService.sendAuthenticationMail(user, req.body.email)
    }).then(() => res.status(201).json({
      message: 'User created !'
    })).catch(err => res.json({ err }))
  }

  /**
   * @param  {object} req
   * @param  {object} res
   * @param  {object} next
   */
  verifToken (req, res, next) {
    User.findOne({ _id: req.params.userID }).then(user => {
      if (user.mailToken && user.mailToken === req.params.token) {
        req.body.password = 'null'
        req.body.username = user.email
        next()
      } else {
        res.json({
          message: 'User not authorized'
        })
      }
    }).catch(err => res.status(500).json({ err }))
  }

  /**
   * @param  {object} req
   * @param  {object} res
   * @param  {object} next
   */
  success (req, res, next) {
    res.status(201).json({
      authenticated: true,
      message: 'User has authenticated.',
      user: {
        id: req.user._id,
        displayName: req.user.displayName,
        email: req.user.email,
        familyName: req.user.familyName,
        givenName: req.user.givenName,
        avatar: req.user.avatar,
        bio: req.user.bio,
        newsletters: req.user.newsletters,
        socialNotification: req.user.socialNotification
      }
    })
  }

  /**
   * @param  {object} req
   * @param  {object} res
   * @param  {object} next
   */
  failed (req, res, next) {
    if (!req.user) {
      res.json({
        authenticated: false,
        message: 'User has not authenticated.'
      })
    }
  }

  /**
   * @param  {object} req
   * @param  {object} res
   * @param  {object} next
   */
  login (req, res, next) {
    req.login(req.user, (err) => {
      if (err) return err
      return res.redirect(process.env.CLIENT_HOME_PAGE_URL)
    })
  }
}

module.exports = Authentication
