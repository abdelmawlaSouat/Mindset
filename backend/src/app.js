const express = require('express');
const bodyParser = require('body-parser');
// const mongoose = require('mongoose');

const app = express();

// mongoose.connect('mongodb+srv://admin:yfWSX8kRfsJKC9m@cluster0.pujno.mongodb.net/<dbname>?retryWrites=true&w=majority',
//   { useNewUrlParser: true,
//     useUnifiedTopology: true })
//   .then(() => console.log('Connection to MongoDB successful !'))
//   .catch(() => console.log('Connection to MongoDB failed !'));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

// app.use(bodyParser.json());
// app.use('/images', express.static(path.join(__dirname, 'images')));


app.use('/', (req, res) => {
  res.json({'message' : 'Test'})
});

// app.use('/api/stuff', stuffRoutes);


module.exports = app;
