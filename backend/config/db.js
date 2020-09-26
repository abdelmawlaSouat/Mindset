const mongoose = require('mongoose')

const connectDB = async () => {
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

module.exports = connectDB