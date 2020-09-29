/*
 * express.js
 *
 * Author: Abdelmawla Souat (abdelmawla.souat@gmail.com)
 * Created on 2020/9/26 00:59:22
 *
 * Copyright (c) 2020 Shuriken
 */

const bodyParser = require('body-parser')
const cookieSession = require('cookie-session')
const cors = require('cors')
const express = require('express')
const morgan = require('morgan')
const routes = require('../routes/routes')

const createExpressApp = (passport) => {
  const app = express()

  if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
  }
  app.use(cookieSession({
    name: process.env.COOKIE_NAME,
    keys: [process.env.COOKIE_KEY],
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }))
  app.use(bodyParser.json())
  app.use(passport.initialize())
  app.use(passport.session())
  app.use(cors({
    origin: process.env.CLIENT_HOME_PAGE_URL,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true
  }))

  routes(app)

  app.listen(
    process.env.PORT,
    console.log(`Server starting in ${process.env.NODE_ENV} in port ${process.env.PORT}`)
  )
}

module.exports = createExpressApp
