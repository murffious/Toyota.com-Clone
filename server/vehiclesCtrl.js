module.exports = {

    getVehicles1: (req, res) => {
        req.app.get('db').minivans().then((cars) => {
            res.send(cars)
        }).catch(function (error){
            console.log(error)
        })
    },

    getTRDacc: (req, res) => {
        console.log("I am here")
        req.app.get('db').all_accessories().then((items) => {
            res.send(items)
        }).catch(function (error){
            console.log(error)
        })
    },

    

}