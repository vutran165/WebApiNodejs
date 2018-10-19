const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 8585;

const _service = require('./routes/routes');

app.use('/services', _service)
app.get('/', (req, res)=> res.send('Hello!!!'));
app.listen(port, ()=> console.log(`Example app listening on port ${port}!`));

