// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 


function squareSum(numbers){
    if(numbers.length > 0) return numbers.map(el => el * el).reduce((prev, curr) => prev + curr)
    return 0
}