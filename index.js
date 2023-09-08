//First-class functions
//
//Assign a function to a variable and use it to convert a string to uppercase.
const upperCase = (string) => {
    return string.toUpperCase();
}
console.log(upperCase("welcome"));



//Higher-order functions

//Converts all string elements to lowercase.
const animals = ["Hippopotamus", "King Cobra", "Giant Panda", "Crocodile"]

// const newArray = animals.map(function(str){
//     return str.charAt(0).toLowerCase() + str.slice(1);
// });
// console.log(newArray);

const newerArray = (arr, func) => {
    const array = [];
    for(i = 0; i < arr.length; i++){
        array.push(func(arr[i]));
    }
    return array;
};

const modifiedArray = newerArray(animals,function(a){
    return a.toLowerCase();
});
console.log(modifiedArray);
//currying function

// Create a function that takes the protocol, subdomain, domain, top-level domain (TLD),
//  and endpoint as input parameters and returns a concatenated URL string in the format. 
//  The function should be implemented as a curried function that returns a new function for each input parameter.