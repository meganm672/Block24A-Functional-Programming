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


// this array will be used for the next 3 problems
const animals = ["Hippopotamus", "King Cobra", "Giant Panda", "Crocodile"];

//Converts all string elements to lowercase.
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
//what could you pass to filter 
// start with specifics -condition 
//then do something that could be reused
const moreThanEleven = (arr) => {
    return arr.filter((element) => {
        return element.length >11;
    })
}

const hippo = moreThanEleven(animals)

console.log(hippo);


// Create a function using a callback that takes a string as input and returns the string in reverse order.

//callback function
const myCallback = (arr) => {
    return arr.map(item => item.split('').reverse().join(''));
}
//function that calls the reverse string on animals array
function reverseArray(arr, callback) {
 return callback(arr);
}

const reverse = reverseArray(animals, myCallback);
console.log(reverse);

// Create two functions. One function generates runners with specific speeds, 
// and the other simulates a race between two runners over a specified distance. 
// Return the winner's name or 'It's a tie!' if both runners finish simultaneously.

//generates a runner object
//runner factory
//create class with only functions 
// no class keyword!
const runnerSpeeds = (name ,speed) => {
    return {runnerName: name, runnerSpeedInMiles: speed};
}

// this is not correct but i will look at it more another time
const runnerRace = (runner1,runner2,raceDistance) => {
    let distance = raceDistance;
    if(runner1.speed > runner2.speed){
        return runner1.name + " is the winner!";
    } else if (runner1.speed < runner2.speed){
        return runner2.name + " is the winner!";
    } else {
        return "its a tie!"
    }
}
const runnerA = runnerSpeeds("Megan", 10);
console.log(runnerA);
const runnerB = runnerSpeeds("Frank", 15);
console.log(runnerB);

const race1 = (runnerA, runnerB);
console.log(race1);
//currying function

// Create a function that takes the protocol, subdomain, domain, top-level domain (TLD),
//  and endpoint as input parameters and returns a concatenated URL string in the format. 
//  The function should be implemented as a curried function that returns a new function for each input parameter.

const concatenatedUrl = (protocol) => {
   return (subdomain)=> {
       return  (domains) =>{
            return  (TLD) => {
              return  (endPoints) => {
                    return protocol+ subdomain + domains  + TLD + endPoints;
                };
            };
        };
    };
}

const weathers = concatenatedUrl('https://')("www.")("fullstackacademy")(".com")("/weather");
console.log(weathers);

const stocks = concatenatedUrl('https://')("www.")("fullstackacademy")(".com")("/stocks");
console.log(stocks);