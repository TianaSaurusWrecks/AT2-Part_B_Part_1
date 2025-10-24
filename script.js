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