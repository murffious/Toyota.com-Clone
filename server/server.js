//varibles
const express = require('express'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    massive = require('massive'),
    config = require('./config')
const vehiclesCtrl = require('./vehiclesCtrl');

const app = express();
//middleware
app.use(bodyParser.json())
app.use(cors());

massive(config.database).then(db => {
    app.set('db', db)
}).catch((err) => {
    console.log(err)
})

//endpoints here
app.get('/carsandvans', vehiclesCtrl.getVehicles1)


//listening
const port = 3000;
app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
})