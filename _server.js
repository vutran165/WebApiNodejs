const express = require('express');
const app = express();


//set uo mongoose connection
const mongoose = require('mongoose');
let db_URL = 'mongodb://bachtuvu:tony8594@ds235833.mlab.com:23619/productstutorial';
let mongoDB = process.env.MONGODB_URL || db_URL;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('err', console.error.bind(console, 'MongoDB connection error:'));
//

//import router
const router = require('./routes/routes');


//configure body parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//

//configure port
const port = 8585;

app.get('/', (req, res) => res.send('Hello!!!'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

