angular.module('toyota').service('service', function(){
    
//from plenty o stuff .com tst for cart summary in product service
    
  const products = [
    {
      id: 1,
      name: 'Bike',
      price: 200
    },
    {
      id: 2,
      name: 'Hat',
      price: 20
    },
    {
      id: 3,
      name: 'Car',
      price: 30000
    }
  ]

  this.getProducts = function() {
    return Array.from(products);
  }

})