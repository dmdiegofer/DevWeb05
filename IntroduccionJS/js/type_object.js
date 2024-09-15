"use strict" ; // MEANS THAT THE CODE DOESN'T WORK IF FOUND ANY MISTAKE OR EXCEPTION WITHOUT VALIDATION
/*  TYPE OBJECT 
const name_prod = 'Monitor 24"' ;
var price = 300 ;
let stock = true ;
*/
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

/* TO ADD NEW ATTRIBUTES TO AN OBJECT IN JS */
product.image = 'image.jpg' ;

/* TO DELETE AN ATTRIBUTES TO AN OBJECT IN JS */
delete product.image ;

/* HOW TO INSTANCE A VARIABLE/CONST WITH THE VALUE FROM AN OBJECT IN JS */
let var_price = product.price ;
var name = product.name_prod ;
const stock_const = product.stock ;

/* DESTRUCTURING ---> THE SAME PROCESS TO INSTANCE FROM AN OBJECT. WORKS WHEN IT HAS THE SAME NAME */
const {price , name_prod , stock} = product ;
// YOU CAN'T DESTRUCTURING AN ATTRIBUTE IF THERE ARE VARIABLES/CONSTANTS WITH THE SAME NAME

/* METHODS WITH OBJ */
Object.freeze(product) ; // IT AVOID THAN YOU CAN ADD OR DELETE ANY ATTRIBUTES TO AN OBJ