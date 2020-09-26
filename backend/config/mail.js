const nodemailer = require('nodemailer')

const transport = {
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL, 
        pass: process.env.PASSWORD
    }
}


const transporter = nodemailer.createTransport(transport)

transporter.verify((err, success) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log('User ready')
    }
})