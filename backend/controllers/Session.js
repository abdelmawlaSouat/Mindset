/*
 * Session.js
 *
 * Author: Abdelmawla Souat (abdelmawla.souat@gmail.com)
 * Created on 2020/9/28 21:55:30
 *
 * Copyright (c) 2020 Shuriken
 */

class Session {
  /**
   * @param  {object} req
   * @param  {object} res
   * @param  {object} next
   */
  logout (req, res, next) {
    req.logout()
    res.redirect(process.env.CLIENT_HOME_PAGE_URL)
  }
}

module.exports = Session
