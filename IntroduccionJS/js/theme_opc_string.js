/* CONCATENATE STRINGS */

const name = 'Diego' ;
const last_name = 'Munioz' ;
// The syntax is the same as Java
const full_name = name +' '+ last_name ;
// YOU can use +' '+ to add space between strings or just a ','.
console.log(full_name , name , last_name); 

/* TEMPLATE STRINGS 
    Using the slaanted single quote, the ones it's to the left of the numb ONE,
    you can create a template, kind of, and denote the variables or functions 
    like this ${name_of_function_or_variable_or_const}
*/
console.log(`Name: ${name}
            Last_name: ${last_name}`)

