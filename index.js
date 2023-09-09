//First-class functions
//
//Assign a function to a variable and use it to convert a string to uppercase.
const upperCase = (string) => {
    return string.toUpperCase();
}
const greeting = upperCase("welcome");
console.log(greeting);

//Create a function that takes a number as input and 
// returns another function that multiplies its input with the original number.
const multiplies = (numA) => {
    return function(numB){
        return numA * numB;
    };
}

const productOfThree = multiplies(3);
const num = productOfThree(7);

console.log(num);

// Create a function that takes two numbers as input and returns an object.

const addFunction = (num1,num2) => {
    const number1 = num1 + 2;
    const number2 = num2 + 4;
    return {a: number1, b: number2};
}

const newObj = addFunction(5,5);
console.log(newObj);
//Higher-order functions

//Converts all string elements to lowercase.
const animals = ["Hippopotamus", "King Cobra", "Giant Panda", "Crocodile"];

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

// Print a string that has a length of more than 11 characters.
const moreThanEleven = (arr, func) => {
      let longestWord = '';
      arr.forEach(function(word){
        if(word.length > longestWord.length){
            longestWord = word;
        }
      }) ;
      return longestWord 
}
console.log(moreThanEleven(animals));

// Create a function using a callback that takes a string as input and returns the string in reverse order.


//currying function

// Create a function that takes the protocol, subdomain, domain, top-level domain (TLD),
//  and endpoint as input parameters and returns a concatenated URL string in the format. 
//  The function should be implemented as a curried function that returns a new function for each input parameter.
