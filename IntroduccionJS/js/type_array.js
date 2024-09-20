/* ARRAYS IN JS*/

let array_example = [1 , .3 , 4] ;
const months = new Array['Enero','Febrero','Marzo'] ; 
var example = ["String" , 10 , false , null , {price: 100 , stock: true} , [ 1 , 13 , 8 , 6 ] ] ;
// console.table(array_example) ; //IN THE BROWSER CONSOLE LOOKS BETTER WITH CONSOLE.TABLE BECAUSE SHOWS THE POSITION AND THE VALUE IN A TABLE
// console.log^(example[3]) ;

// ARRAYS SOME METHODS
months.length ;
example.forEach( function(example) {
    example ;
})
months[4] = 'Abril' ;
array_example[4] = 40 ;
example[6] = 50 ;
example[0] = 'Hola' ;
example[0] = 60 ;

example.push('juan' , 100 , true) ; // IT ADDS A NEW ELEMENT AT THE END OF THE ARRAY, IT CAN BE MORE THAN ONE.
example.unshift(.30 , 40 , 'Camila') ; // IT ADDS AT THE BEGINING OF THE ARRAY, IT CAN BE MORE THAN ONE.

example.pop(); // IT DELETES THE LAST ELEMENT OF THE ARRAY
example.shift(); // IT DELETES AT THE FIRST ELEMENT OF THE ARRAY
example.splice( 2 , 0 ) ; // IT DELETES ELEMENT/S OF THE ARRAY ( POSITION , NUMB OF ELEMENTS )

// REST OPERATOR O SPREAD OPERATOR
let new_array = [ ...monts , 'Mayo' ] ;
