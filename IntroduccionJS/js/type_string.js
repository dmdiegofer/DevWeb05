/* STRING */

const product = "Monitor 20\" pulgadas"
const product_ = 'Monitor 20' ;
const product_2 = String("Monitor 30 pulgadas");
const product_3 = new String("Monitor 40 pulgadas");

console.log(typeof product);
console.log(typeof product_2);
console.log(typeof product_3);

/* METHODS OF STRING */

console.log(product.length); /* To show the lengh of a string */
console.log(product.indexOf('Monitor')); /* to find a word a letter or something in a string 
                            <0 doesn't exist in the string 
                            >0 show the locations of the search with a count to left starting with cero */
console.log(product.includes('Monitor')); /* Show us a boolean when find the search or not in a string */
