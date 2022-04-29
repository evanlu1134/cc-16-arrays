//write your code here
// declare a function named "replaceWithYerr" that is accepting 3 arguments:
//  1. An Array
//  2. Start Index
//  3. Number of elements to replace string "Yerr"
//  The function returns a NEW array with same elements, so = array.length amount
//   EXCEPT starting elements swapped with "yerr"
// Noting that the amount of elements replaced is caused by the 3rd argument
//   While 2nd and 3rd arguments are optional
//  Also, if 3rd argument is missing, the function returns starting index and end of the array 

// Input: Array, #, #
// Output: An array

// 1 is the starting point array are 0 based so Jan is 0
// feb is 1

// ex: 'replaeWithYerr' (months, 0=pinpoint start of yerr, 3=counter increments from position)
// outputs: "yerr", "yerr", "yerr" , "April", "May", "June"
// Plan of attack:
// declare a function 3 arguments
// Initalize a new array
// iterate through the array that given at 0
// ending at array.length
// if i is equal to the starting point and index is not undefined and i < the third arg
//  push yerr into the output array
// push the current element 
// return the new array
function replaceWithYerr (array, start=0, num=array.length) {
    let outputArray = [];
    for (let i = 0; i < array.length; i ++) {
        // i greater than equal to 1 
        // and i less than 4
        // checking 1 - 3
        if (i >= start && i < start + num ){
            console.log("The value of i:", i);
            outputArray.push("yerr");
        }
        // else if(i >= start && num === undefined){
        //     outputArray.push("yerr");
        // }else if(start === undefined && num === undefined){
        //     outputArray.push("yerr");
        // }  
        else {
            outputArray.push(array[i]);
        }
    }
    // outside of the loop
    console.log("The value of array:", outputArray);
    return outputArray;
}
console.log("Q1---")
const months = ['Jan', 'February', 'March', 'April', 'May', 'June'];
console.log (replaceWithYerr(months, 2,3));