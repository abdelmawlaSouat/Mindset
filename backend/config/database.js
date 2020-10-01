/*
 * database.js
 *
 * Author: Abdelmawla Souat (abdelmawla.souat@gmail.com)
 * Created on 2020/9/28 17:02:01
 *
 * Copyright (c) 2020 Shuriken
 */

const mongoose = require('mongoose')

const ConnectionToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    })
    console.log('Connected to MongoDB !')
  } catch (err) {
    console.log(err)
  }
}

module.exports = ConnectionToDB
