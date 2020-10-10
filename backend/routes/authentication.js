/*
 * authentication.js
 *
 * Author: Abdelmawla Souat (abdelmawla.souat@gmail.com)
 * Created on 2020/9/28 17:38:41
 *
 * Copyright (c) 2020 Shuriken
 */

const passport = require('passport')
const isAuthenticated = require('../middleware/isAuthenticated')
const Authentication = require('../controllers/Authentication')
const authCtrl = new Authentication()

module.exports = (router) => {
  
  router.get('/', isAuthenticated, authCtrl.success)
  router.get('/failed', authCtrl.failed)
  router.get('/google',
    passport.authenticate('google', { scope: ['email', 'profile'] })
  )
  router.get('/google/callback',
    passport.authenticate('google', { failureRedirect: 'failed' }),
    (req, res) => res.redirect(process.env.CLIENT_HOME_PAGE_URL)
  )
  router.get('/facebook',
    passport.authenticate('facebook', { scope: 'email,user_photos' })
  )
  router.get('/facebook/callback',
    passport.authenticate('facebook', { failureRedirect: 'failed' }),
    (req, res) => res.redirect(process.env.CLIENT_HOME_PAGE_URL)
  )
  router.post('/email', authCtrl.findOrCreateUser)
  router.get('/email/login/:userID/:token',
    authCtrl.verifToken,
    passport.authenticate('local', { failureRedirect: 'failed' }),
    authCtrl.login
  )
  return router
}
