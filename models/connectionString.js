const mongoose = require('mongoose');

let db_URL = 'mongodb://bachtuvu:tony8594@ds235833.mlab.com:23619/productstutorial';

let mongoDB = process.env.MONGODB_URL || db_URL;

mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('err', console.error.bind(console, 'MongoDB connection error:'));
