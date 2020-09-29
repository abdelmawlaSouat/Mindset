/*
 * isAuthenticated.js
 *
 * Author: Abdelmawla Souat (abdelmawla.souat@gmail.com)
 * Created on 2020/9/28 17:20:57
 *
 * Copyright (c) 2020 Shuriken
 */

const isAuthenticated = (req, res, next) => {
  if (!req.user) {
    res.redirect('failed')
  } else {
    next()
  }
}

module.exports = isAuthenticated
