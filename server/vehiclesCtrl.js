module.exports = {



    //build all 
    getVehicles1: (req, res) => {
        req.app.get('db').minivans().then((cars) => {
            res.send(cars)
        }).catch(function (error) {
            console.log(error)
        })
    },
    gettrucks1: (req, res) => {
        req.app.get('db').trucks().then((cars) => {
            res.send(cars)
        }).catch(function (error) {
            console.log(error)
        })
    },
    getcrossovers1: (req, res) => {
        req.app.get('db').crossovers().then((cars) => {
            res.send(cars)
        }).catch(function (error) {
            console.log(error)
        })
    },
    gethybrids1: (req, res) => {
        req.app.get('db').hybrids().then((cars) => {
            res.send(cars)
        }).catch(function (error) {
            console.log(error)
        })
    },



    // build tacoma
    getTacomaGrades: (req, res) => {

        // if 
        req.app.get('db').tacomagrades().then((items) => {
            res.send(items)
        }).catch(function (error) {
            console.log(error)
        })
    },

    getTRDphotos: (req, res) => {
   var id = req.params.id
        // if 
        req.app.get('db').trdphotos(id).then((items) => {
            res.send(items)
        }).catch(function (error) {
            console.log(error)
        })
    },
    getTacomacabsbeds: (req, res) => {

        req.app.get('db').tacomacabsbeds().then((items) => {
            res.send(items)
        }).catch(function (error) {
            console.log(error)
        })
    },
    getTacomaconfiguration: (req, res) => {

        // if 
        req.app.get('db').trdconfiguration().then((items) => {
            res.send(items)
            // console.log(items)
        }).catch(function (error) {
            console.log(error)
        })
    },
    getTacomapackages: (req, res) => {

        // if 
        req.app.get('db').trdpackages().then((items) => {
            res.send(items)
        }).catch(function (error) {
            console.log(error)
        })
    },
    getTacomaColors: (req, res) => {

        // if 
        req.app.get('db').trdcolors().then((items) => {
            res.send(items)
        }).catch(function (error) {
            console.log(error)
        })
    },
    getTRDacc: (req, res) => {
        
        // if 
        req.app.get('db').all_accessories().then((items) => {
            res.send(items)
        }).catch(function (error) {
            console.log(error)
        })
    },
    


}