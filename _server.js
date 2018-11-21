const express = require('express');
const app = express();



//set uo mongoose connection with online db
const mongoose = require('mongoose');
let db_URL = 'mongodb://bachtuvu:tony8594@ds235833.mlab.com:35833/dbcompany';
// let db_URL_local = 'mongodb://localhost:27017/CompanyDb'
mongoose.connect(db_URL, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log("error:" + err)
    // process.exit();
})

//

//import router
const router = require('./routes/routes');


//configure body parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//

//enable CORS
app.use(function (req, res, next) {
    // console.log(req);
    // req.xhr;
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT, DELETE");
    res.header("Access-Control-Allow-Credentials", true)
    next();
})

//configure port
const port = 8585;


require('./routes/routes')(app);


app.get('/', (req, res) => {
    res.json({ "message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes." })
})

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});

