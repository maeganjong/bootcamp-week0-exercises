const assert = require("assert");

// Feel free to look things up online!

// TODO - write a function which converts a multi-word string into an array of words
const tokenize = str => str.split(" ");

// TODO - write a function which reverses the string
const reverse = str => str.split("").reverse().join("");

// TODO - write a function which returns the inputted array without duplicate elements
const uniqueOnes = arr => Array.from(new Set(arr));


// TODO - write a function which returns the factorial of a positive integer
const factorial = num => (num === 0)?1:num*factorial(num - 1);

// TODO - write a function which combines two arrays into an array of 2-element arrays and returns -1
// if the two arrays are of unequal length
// Example: zip([1, 2, 3], [5, 3, 1]) === [[1, 5], [2, 3], [3, 1]]
const zip = (arr1, arr2) => {
    if (arr1.length != arr2.length){
        return -1;
    };
    arr3 = [];
    for(let i = 0; i < arr1.length; i++)
    {
        test = [];
        test.push(arr1[i]);
        test.push(arr2[i]);
        arr3.push(test);
    }
    return arr3;
};

// TODO - Write a function which does the opposite of `zip()`
const unzip = arr => {
    arr1 = [];
    arr2 = [];
    for(let i = 0; i < arr.length; i++)
    {
        arr1.push(arr[i][0]);
        arr2.push(arr[i][1]);
    }
    test = [];
    test.push(arr1);
    test.push(arr2);
    return test;
};

// TODO - write a function which shifts a string `num` characters to the right
// Example = shiftThree("Hello") === "lloHe"
const shiftRight = (str, num) => {
    start = str.substring(num-1);
    end = str.substring(0, num-1);
    return start.concat(end);
};

// TODO - write a function which returns the current date in the following format:
// "Today's date is January 7th, 2016. It is eleven thirty-seven in the morning."
const announceDate = () => {
    let d = new Date();
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let suffix;
    let hour = d.getHours()
    if (hour < 12){
        suffix = 'AM';
        if (hour === 0){
            hour = 12;
        }
    }
    else{
        suffix = 'PM';
        if (hour > 12){
            hour %= 12;
        }
    }
    return `Today's date is ${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}. It is ${hour}:${d.getMinutes()} ${suffix}.`;
};

// Write tests here:
assert(1 < 2);
assert(1 + 2 === 3);
assert([2, 3][0] === 2);
console.log(tokenize("Hello Hello"));
console.log(reverse("Hello Hello"));
console.log(uniqueOnes(["hello", "hello"]));
console.log(factorial(3));
console.log(zip([1, 2, 3], [5, 3, 1]));
console.log(unzip([[1, 5], [2, 3], [3, 1]]));
console.log(shiftRight("Hello", 3));
console.log(announceDate());