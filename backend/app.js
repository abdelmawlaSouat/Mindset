/*
* app.js
*
* Author: Abdelmawla Souat (abdelmawla.souat@gmail.com)
* Created on 2020/9/26 23:34:16
*
* Copyright (c) 2020 Shuriken
*/

const passport = require('passport')
const connectionToDB = require('./config/database')
const dotenv = require('dotenv')
const dotenvExpand = require('dotenv-expand')

dotenvExpand(dotenv.config({ path: './config/config.env' }))

connectionToDB().then(() => {
  const expressAppLoader = require('./loaders/express')
  const passportLoader = require('./loaders/Passport/passport')
  passportLoader(passport)
  expressAppLoader(passport)
}).catch(err => console.log(err))
