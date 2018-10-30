const express = require('express');
const app = express();


//set uo mongoose connection
const mongoose = require('mongoose');
let db_URL = 'mongodb://bachtuvu:tony8594@ds235833.mlab.com:35833/dbcompany';
// let mongoDB = process.env.MONGODB_URL || db_URL;
// mongoose.connect(mongoDB);
// mongoose.Promise = global.Promise;
// let db = mongoose.connection;
// db.on('err', console.error.bind(console, 'MongoDB connection error:'));

mongoose.connect(db_URL, {
    useNewUrlParser: true
}).then(() => {
    var db = 
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log("error:" + err) 
    process.exit();
})

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


require('./routes/routes')(app);


app.get('/',(req, res)=>{
    res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."})
})

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});

