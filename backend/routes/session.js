/*
 * session.js
 *
 * Author: Abdelmawla Souat (abdelmawla.souat@gmail.com)
 * Created on 2020/10/7 10:49:24
 *
 * Copyright (c) 2020 Shuriken
 */

const isAuthenticated = require('../middleware/isAuthenticated')
const Session = require('../controllers/Session')
const sessionCtrl = new Session()

module.exports = (router) => {
	router.post('/user/update', sessionCtrl.updateField)

	return router
}