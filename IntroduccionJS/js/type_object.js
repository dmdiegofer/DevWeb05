/*  TYPE OBJECT */

const name_prod = 'Monitor 24"' ;
var price = 300 ;
let stock = true ;


let product = {
    name_prod : 'Monitor 24"',
    price : 300 ,
    stock : true
}

/*  WAYS TO ACCESS
console.log(product) ; ------------> object with all it's attributes (name, price, stock)
console.log(product.price) ; ------> Price attribute only. The dot can be use to call object's methods of its own 
console.log(product["stock"]) ; ---> Stock attribute only. This way to get the attribute of an object is just like the old Java way.
*/