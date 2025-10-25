// make the array with the requested numbers
let numbers = [11, 5, 8, 3, 25, 16, 31, 45, 14, 20];
console.log(numbers); // log the array to the console


// Question 1.2 sort the array in ascending order from smallest to largest
numbers.sort(function(a, b) {
    return a - b;
});


// print the sorted array to the console
console.log("Here is the sorted array in ascending order: ", numbers);

// Question 1.3 Add three numbers into the sorted array
numbers.push(19, 23, 30);

// sort the array again now that the new numbers have been added
numbers.sort(function(a, b) {
    return a - b;
});

// print the new sorted array
console.log("Here is the sorted array in ascending order with the new addition of 19, 23, and 30: ", numbers);

// Question 1.4 Remove two numbers 8, 31 from array
// pop can remove last element, shift can remove first element, splice can remove via 
// the index of the number, and filter can remove the specified numbers directly

// remove the numbers 8 and 31 frm the array using filter
numbers = numbers.filter(num => num !== 8 && num !== 31);

// print the updated array
console.log("Updated array after removing 8 and 31", numbers);


// Question 1.5 Create a function called "sequential search"
// this function accepts two parameters: an array and a value
// This function searches the input array for the input value using sequential search
// You cannot use the JavaScript built-in "find" function. 
// You must implement the algorithm with you own code
// This function returns the index of the target value if found and -1 if not found

// The Algorithm:
// 1. Start from the first element of the array
// 2. Compare with the target value
// 3. If match, return the current index
// 4. If not, move to next element
// 5. Repeat steps 2 - 4 until the element is found or the end of array is reached
// 6. If target not found return -1

// Sequential Search Function:
function sequentialSearch(array, targetValue) {
    // loop through the array elements one by one
    for (let i = 0; i < array.length; i++) {
        console.log(`Checking index ${i}: ${array[i]}`); // debug
        if (array[i] === targetValue) {
            // return index when found
            return i;
        }
       
    }
    // return -1 if not found
    return -1;
}

// // Testing the function for Target Found
let target1 = 45;
let result1 = sequentialSearch(numbers, target1);
if (result1 !== -1) {
    console.log(`Value ${target1} found at index ${result1}.`);
}
else {
    console.log(`Value ${target1} not found.`);
}

// Testing the function for Target NOT Found
let target2 = 88;
let result2 = sequentialSearch(numbers, target2);
if (result2 !== -1) {
    console.log(`Value ${target1} found at index ${result2}.`);
}
else {
    console.log(`Value ${target2} not found.`);
}
