const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors')

const port = 7777;

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('api/users',  function(req, res, next) {
    console.log('Middleware ')
    next();
});


app.get('api/users',  function(req, res) {
    res.status(200).send('Hello')
})

app.get('api/secretData', function(req, res) {
    res.status(200).send('Super Secret Code')
})



app.listen(port, () => console.log(`Listening on port: ${port}`) );