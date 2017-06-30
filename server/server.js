//varibles
const express = require('express'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    massive = require('massive'),
    config = require('./config')
const session = require('express-session')
const vehiclesCtrl = require('./vehiclesCtrl');
const summaryCtrl = require('./summaryCtrl')
const path = require("path")

const app = express();
//middleware
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, "..", "/public")))
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
// requests to db for ng repeats
//build all view
app.get('/carsandvans', vehiclesCtrl.getVehicles1)
app.get('/trucks', vehiclesCtrl.gettrucks1)
app.get('/crossovers', vehiclesCtrl.getcrossovers1)
app.get('/hybrids', vehiclesCtrl.gethybrids1)

//build tacoma 
app.get('/tacomagrades', vehiclesCtrl.getTacomaGrades)
app.get('/tacomacabsbeds', vehiclesCtrl.getTacomacabsbeds)
app.get('/tacomaconfiguration', vehiclesCtrl.getTacomaconfiguration)
app.get('/trdcolors', vehiclesCtrl.getTacomaColors)
app.get('/tacomapackages', vehiclesCtrl.getTacomapackages)
app.get('/TRDaccessories', vehiclesCtrl.getTRDacc)
app.get('/getTRDphotos/:id', vehiclesCtrl.getTRDphotos)


// summary page cart like feature
app.post('/summary', summaryCtrl.addItemToSummary)
app.get('/summary', summaryCtrl.getSummary)
app.delete('/summary', summaryCtrl.removeItemFromSummary)
//listening
const port = 3000;
app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
})