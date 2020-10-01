/*
 * Mailer.js
 *
 * Author: Abdelmawla Souat (abdelmawla.souat@gmail.com)
 * Created on 2020/9/28 12:57:51
 *
 * Copyright (c) 2020 Shuriken
 */

const nodemailer = require('nodemailer')

class Mailer {
  constructor () {
    this.transporter = nodemailer.createTransport({
      host: process.env.MAILER_HOST,
      port: 587,
      secure: false,
      auth: {
        user: process.env.MAILER_EMAIL,
        pass: process.env.MAILER_PASSWORD
      }
    })
    this.transporter.verify((err, success) => {
      if (err) console.log(err)
    })
  }

  sendAuthenticationMail (user, receiverEmail) {
    this.transporter.sendMail({
      from: process.env.MAILER_EMAIL,
      to: receiverEmail,
      subject: 'Sign in to Mindset',
      html: `<table width="100%" border="0" cellspacing="0" cellpadding="0" style="color: black;">
                            <tr>
                                <td align="center" >
                                    <h1 style="font-size:2rem;">Mindset</h1><br/>
                                    <p style="margin-bottom:20px; font-size:1rem;">Click the link below to sign in to your Mindset account.</p><br/>
                                    <a href="${process.env.SERVER_HOME_URL}/api/auth/email/login/${user._id}/${user.mailToken}">
                                        <button style="padding: 1rem; font-size: 1rem; color: white; background-color: #2196f3; border-color: #2196f3; box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); border-radius: 5px; border-style: none;">
                                            Sign in to Mindset
                                        </button>
                                    </a><br/>
                                    <p style="margin-top:20px; font-size:1rem;">If the button above doesn’t work, paste this link into your web browser:</p>
                                    <a href="${process.env.SERVER_HOME_URL}/api/auth/email/login/${user._id}/${user.mailToken}" style="text-decoration: none; color: black;">
                                    ${process.env.SERVER_HOME_URL}/api/auth/email/login/${user._id}/${user.mailToken}
                                    </a><br/>
                                    <footer style="margin-top:120px; padding:15px; border-top: 1px solid grey">Copyright © 2020 Mindset. Tous droits réservés.</footer>    
                                </td>
                            </tr>
                        </table>`
    }, (err, data) => { (err) ? console.log(err) : console.log('Mail sent.') })
  }
}

module.exports = Mailer
