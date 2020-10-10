/*
 * Session.js
 *
 * Author: Abdelmawla Souat (abdelmawla.souat@gmail.com)
 * Created on 2020/9/28 21:55:30
 *
 * Copyright (c) 2020 Shuriken
 */

const User = require('../models/User')

class Session {
  /**
   * @param  {object} req
   * @param  {object} res
   * @param  {object} next
   */
  updateField(req, res, next) {
    User.updateOne({ _id: req.body.id }, req.body.field)
      .then(() => {
        User.findOne({ _id: req.body.id })
          .then((user) => {
            res.send({
              status: 201,
              success: true,
              user: {
                id: user._id,
                displayName: user.displayName,
                email: user.email,
                familyName: user.familyName,
                givenName: user.givenName,
                bio: user.bio,
                avatar: user.avatar,
                newsletters: user.newsletters,
                socialNotification: user.socialNotification,
              }
            })
          }).catch(err => console.log(err))
      }).catch(err => console.log(err))
  }

  /**
   * @param  {object} req
   * @param  {object} res
   * @param  {object} next
   */
  logout(req, res, next) {
    req.logout()
    res.redirect(process.env.CLIENT_HOME_PAGE_URL)
  }
}

module.exports = Session
