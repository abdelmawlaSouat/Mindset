/*
 * routes.js
 *
 * Author: Abdelmawla Souat (abdelmawla.souat@gmail.com)
 * Created on 2020/9/28 13:17:32
 *
 * Copyright (c) 2020 Shuriken
 */

const authenticationRoutes = require('./authentication')

const routes = (app) => {
  app.use('/api/auth', authenticationRoutes)
}

module.exports = routes
