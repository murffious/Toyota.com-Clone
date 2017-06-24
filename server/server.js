//varibles
const express = require('express'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    massive = require('massive'),
    config = require('./config')
const session = require('express-session')
const vehiclesCtrl = require('./vehiclesCtrl');

const app = express();
//middleware
app.use(bodyParser.json())
app.use(cors());
app.use(session ({
   secret: config.secret,
   resave: false,
   saveUninitialized: false 
}))

massive(config.database).then(db => {
    app.set('db', db)
}).catch((err) => {
    console.log(err)
})


//endpoints here
app.get('/carsandvans', vehiclesCtrl.getVehicles1)
app.get('/TRDaccessories', vehiclesCtrl.getTRDacc)

//listening
const port = 3000;
app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
})