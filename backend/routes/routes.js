/*
 * routes.js
 *
 * Author: Abdelmawla Souat (abdelmawla.souat@gmail.com)
 * Created on 2020/9/28 13:17:32
 *
 * Copyright (c) 2020 Shuriken
 */

const router = require('express').Router()
const authenticationRoutes = require('./authentication')
const sessionRoutes = require('./session')

const routes = (app) => {
  app.use('/api/auth', authenticationRoutes(router))
  app.use('/api/session', sessionRoutes(router))
  
}

module.exports = routes
