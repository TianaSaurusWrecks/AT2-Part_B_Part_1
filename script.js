// make the array with the requested numbers
let numbers = [11, 5, 8, 3, 25, 16, 31, 45, 14, 20];
console.log(numbers); // log the array to the console

// sort the array in ascending order from smallest to largest
numbers.sort(function(a, b) {
    return a - b;
});

// print the sorted array to the console
console.log("Here is the sorted array in ascending order: ", numbers);