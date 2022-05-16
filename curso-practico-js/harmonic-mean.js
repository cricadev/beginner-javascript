// &Sort the numbers in the array
const example = [4, 9, 6, 5, 2, 8];
// const number = prompt("Enter a list of numbers separated by commas");
// const numbers = number.split(',');
const sortedNumbers = example.sort((a, b) => a - b);
console.log(sortedNumbers)
    //& H = N/addition of the numbers 
function getHarmonicMean(arr) {
    //get the length 
    const length = arr.length;
    console.log(length)
        //convert the numbers in division   
    const division = arr.map((e) => 1 / e);
    console.log(division)
        //get the sum of the division
    const sum = division.reduce((a, b) => a + b);
    console.log(sum)

    const result = length / sum;
    console.log(result.toFixed(2));
    return result;
}
getHarmonicMean(example);