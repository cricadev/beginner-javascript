import { colombia } from './salarios.js';
const salariosCol = colombia.map((e) => e.salary);
const salariosColSorted = salariosCol.sort((a, b) => a - b);




const getMean = (arr) => arr.reduce((a, b) => a + b) / arr.length;

function getMedian(list) {
    list.sort((a, b) => a - b);
    const isEven = () => list.length % 2 === 0;

    if (isEven()) {
        const middleIndex = list.length / 2;
        const secondMiddleIndex = middleIndex - 1;
        const values = [list[middleIndex], list[secondMiddleIndex]];
        return getMean(values);
    }
    if (!isEven()) {
        const middleValue = Math.floor(list.length / 2);
        return list[middleValue];
    }
};

function getMedianSalaries(list) {
    const isEven = (num) => num % 2 === 0;
    const half = parseFloat(list.length / 2);
    if (isEven(list.length)) {
        const person1 = list[half - 1];
        const person2 = list[half];

        const median = getMedian([person1, person2]);
        return median;

    } else {
        const middlePerson = list[half];
        return middlePerson;
    }
}
const generalMedianCol = getMedianSalaries(salariosColSorted);
console.log({
        generalMedianCol
    },
    // median10Percent,
);

// median top 10%

const spliceStart = parseInt(salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - spliceStart;

console.log(spliceStart, spliceCount);
const median10Percent = salariosColSorted.slice(spliceStart, spliceCount);
console.log(median10Percent);
const medianTop10Col = getMedianSalaries(median10Percent);
console.log(salariosColSorted)

console.log(medianTop10Col)