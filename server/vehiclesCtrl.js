module.exports = {

    getVehicles1: (req, res) => {
        console.log("I am here")
        req.app.get('db').minivans().then((cars) => {
            res.send(cars)
        }).catch(function (error){
            console.log(error)
        })
    },

    

}