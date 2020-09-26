const authenticationRoutes = require('./routes/authentication')
const bodyParser = require('body-parser')
const cookieSession = require('cookie-session')
const connectDB = require('./config/db')
const cors = require('cors')
const dotenv = require('dotenv')
const dotenvExpand = require('dotenv-expand')
const express = require('express')
const morgan = require('morgan')
const passport = require('passport')

// Load Config
dotenvExpand(dotenv.config({ path: './config/config.env' }))
// Passport Config
require('./config/passport-config')(passport)
// MONGO_DB Connection
connectDB()

const app = express()

// LOG
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

app.use(cookieSession({
    name: 'userSession',
    keys: [process.env.COOKIE_KEY],
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))

// App Configuration
app.use(bodyParser.json())
app.use(passport.initialize())
app.use(passport.session())
app.use(cors({
    origin: "http://localhost:8080",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true
}))

// ROUTES
app.use('/api/auth', authenticationRoutes)

// PORT CONFIG
const PORT = process.env.PORT || 3000
app.listen(
    PORT,
    console.log(`Server starting in ${process.env.NODE_ENV} in port ${PORT}`)
)