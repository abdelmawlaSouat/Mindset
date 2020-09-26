const router = require('express').Router()
const passport = require('passport')
const authMiddleware = require('../middleware/authentication')
const User = require('../models/User')
const TokenGenerator = require('uuid-token-generator')

router.get('/', authMiddleware, (req, res) => {
    res.status(201).json({
        authenticated: true,
        message: 'User has authenticated.',
        user: {
            displayName : req.user.displayName,
            email : req.user.email,
            familyName : req.user.familyName,
            givenName : req.user.givenName,
            picture : req.user.picture,
        }
    })
})

router.get('/failed', (req, res) => {
    if (!req.user) {
        res.json({
            authenticated: false,
            message: 'User has not authenticated.XX',
            // status: 401 à vérifier
        })
    }
})

router.get('/logout', (req, res) => {
    req.logout() 
    res.redirect(process.env.CLIENT_HOME_PAGE_URL)
})


// GOOGLE
router.get(
    '/google',
    passport.authenticate('google', { scope: ['email', 'profile'] })
)

router.get(
    '/google/callback',
    passport.authenticate('google', { failureRedirect: 'failed' }),
    (req, res) => res.redirect(process.env.CLIENT_HOME_PAGE_URL)
)

// Facebook
router.get(
    '/facebook',
    passport.authenticate('facebook', { scope: 'email,user_photos' })
)

router.get(
    '/facebook/callback',
    passport.authenticate('facebook', { failureRedirect: 'failed' }),
    (req, res) => res.redirect(process.env.CLIENT_HOME_PAGE_URL)
)


// Email
const nodemailer = require('nodemailer')
const transport = {
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: '6shuriken6@gmail.com', 
        pass: '6Amaterasu6'
    }
}

const transporter = nodemailer.createTransport(transport)
transporter.verify((err, success) => {
    if (err) {
        console.log('Verificaion transporteur error');
        console.log(err)
    }
})

router.get('/popo', (req, res) => {
    console.log('POPO Route (error passport)');
})


router.post('/email',
    (req, res) => {
         User.findOne({
            email: req.body.email
        }).then((user) => {
            const authToken = new TokenGenerator(256, TokenGenerator.BASE62).generate()
            if (!user) {
                user =  new User({
                    mailToken: authToken,
                    email: req.body.email,
                    displayName: req.body.email.split('@')[0]
                })
                user.save()
            } 
            else {
                User.updateOne(
                    { email: req.body.email },
                    { mailToken: authToken }
                )
            }
            return user
        }).then((user) => {
            transporter.sendMail({
                from: process.env.EMAIL,
                to: req.body.email,
                subject: 'Sign in to Mindset',
                html : `<table width="100%" border="0" cellspacing="0" cellpadding="0" style="color: black;">
                            <tr>
                                <td align="center" >
                                    <h1 style="font-size:2rem;">Mindset</h1><br/>
                                    <p style="margin-bottom:20px; font-size:1rem;">Click the link below to sign in to your Mindset account.</p><br/>
                                    <a href="http://localhost:3000/api/auth/email/login/${user._id}/${user.mailToken}">
                                        <button style="padding: 1rem; font-size: 1rem; color: white; background-color: #2196f3; border-color: #2196f3; box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); border-radius: 5px; border-style: none;">
                                            Sign in to Mindset
                                        </button>
                                    </a><br/>
                                    <p style="margin-top:20px; font-size:1rem;">If the button above doesn’t work, paste this link into your web browser:</p>
                                    <a href="http://localhost:3000/api/auth/email/login/${user._id}/${user.mailToken}" style="text-decoration: none; color: black;">
                                    http://localhost:3000/api/auth/email/login/${user._id}/${user.mailToken}
                                    </a><br/>
                                    <footer style="margin-top:120px; padding:15px; border-top: 1px solid grey">Copyright © 2020 Mindset. Tous droits réservés.</footer>    
                                </td>
                            </tr>
                        </table>
                        ` 
            }, (err, data) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log('Email sent!!!');
                }
            })
        }).catch(err => {
            console.log(err + ' **** AMATERASU')
        })
    } 
)

router.get(
    '/email/login/:userID/:token',
    (req, res, next) =>  {
        User.findOne({ _id : req.params.userID }).then(user => {
            if (user.mailToken === req.params.token) {
                req.body.password = 'null'
                req.body.username = user.email
                next()
            } else {
                res.json({
                    message: 'User not authorized'
                })
            }

        }).catch(err => console.log(err))
    },
    passport.authenticate('local', { failureRedirect: 'popo' }),
    (req, res) => {
        console.log(req.user)
        req.login(req.user, (err) => {
            if (err)
                return err
            else 
                return res.redirect(process.env.CLIENT_HOME_PAGE_URL)
        })

    }

)


module.exports = router
