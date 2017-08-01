angular.module('toyota').service('buildTacomaSvc', function($http, $state){

const devUrl = 'http://localhost:3000'
const hostedUrl = 'https://git.heroku.com/paulmurff.git'
const service = this
// build tacoma 
this.tacomagrades = () => {
    return $http.get('/tacomagrades').catch((error)=> console.log(error))

} 
this.trdcabsbeds = () => {
    return $http.get('/tacomacabsbeds').catch((error)=> console.log(error))

} 
this.trdconfiguration = () => {
    return $http.get('/tacomaconfiguration')

} 
this.trdcolors = () => {
    return $http.get('/trdcolors').then( (res) => {
        service.colors = res.data
        return res.data
    }).catch((error)=> console.log(error))
} 
this.trdpackages = () => {
    return $http.get('/tacomapackages')

} 

this.TRDaccessories = () => {
    return $http.get('/TRDaccessories')

} 



// cart or summary
this.addToSummary = (product) => {
    // console.log(`Adding ${product} to cart`)
    return $http.post('/summary', product)
  }

  this.getSummary = ()=>{
    //   console.log("hello there pal")
    return $http.get('/summary').then( (res) => {
        // console.log(res.data)
        return res
    })
  }

this.photos = [{
                src: '../../app/images/build-tacoma-home/sr-1.png',
                title: 'Pic 1'
            },{
                src: '../../app/images/build-tacoma-home/sr-2.png',
                title: 'Pic 2'
            },  {
                src: '../../app/images/build-tacoma-home/sr-3.png',
                title: 'Pic 3'
            }, {
                src: '../../app/images/build-tacoma-home/sr-4.png',
                title: 'Pic 4'
            }, {
                src: '../../app/images/build-tacoma-home/sr-5.png',
                title: 'Pic 5'
            },
             {
                src: '../../app/images/build-tacoma-home/sr-6-interior1.png',
                title: 'Pic 6'
            }, {
                src: '../../app/images/build-tacoma-home/sr-7-interior2.png',
                title: 'Pic 7'
            }, {
                src: '../../app/images/build-tacoma-home/sr-8-interior3.png',
                title: 'Pic 8'
            }];
//         this.photos= {}
// this.photos.photos = photos;


this.getTRDphotos = (id) => {
    return $http.get('/getTRDphotos/' + id).then( (res)=> {
        // console.log(res)
        this.photos.photos = res.data[0].images
       return res.data[0].images 
        
        // $state.go($state.current, {}, {reload: true})
        // console.log(JSON.stringify(res.data, null, 2))
        
        // var obj = {1: 11, 2: 22};
// var arr = Object.keys(service.photos).map((key) =>{ return service.photos[key]; });
        //  console.log(service.photos)
    //   var photos = arr.reduce( (t, c, i) => {
    //             t.push({"src": c, title: "Pic " + (i +1)})
    //             return t
    //     }, [])
        
    //    console.log(photos);
       
        // return service.photos
    })
    

} 
this.gettrdred = (id) => {
    return $http.get('/gettrdred/' + id).then( (res)=> {
        // console.log(res)
        // console.log("color change")
        this.photos.photos = res.data[0].images
       return res.data[0].images 
        
    })
}
})