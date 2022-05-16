//mean
console.group("Mean");
const numbers = [2, 24, 24, 22, 3, 6, 74, 22, 23, 23];
const words = ["Colombia", "Cambodia", "Dominica", "Ecuador", "El Salvador", "Guatemala", "Honduras", "Nicaragua", "Panama", "Paraguay", "Peru", "Puerto Rico", "Uruguay", "Venezuela"];
const getMean = (arr) => arr.reduce((a, b) => a + b) / arr.length;
console.log(getMean(numbers));
console.groupEnd();
console.group("median");
// median
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
console.log(getMedian(numbers));

console.groupEnd();

console.group("Mode");

//mode
function getMode(array) {

    const sortedArray = array.sort((a, b) => a - b);
    const arrayMode = {};
    sortedArray.map(function(e) {
        if (arrayMode[e]) {
            arrayMode[e]++;
        } else {
            arrayMode[e] = 1;
        }
    });
    console.log(arrayMode);
    const listArray = Object.entries(arrayMode).sort((a, b) => a[1] - b[1]);
    console.log(listArray);
    const arrayReturn = [];
    listArray.forEach((e) => {
        if (listArray[listArray.length - 1][1] === e[1]) {
            const mode = {
                name: e[0],
                count: e[1],
            };
            const getArray = Object.entries(mode);
            arrayReturn.push(getArray)
            console.log(getArray)
            console.log(mode);
            console.log(`mode is ${mode.name} with  ${mode.count} appearences`);
        }
    });
    return arrayReturn;
};
console.log(getMode([24, 21, 10, 15, 18]));
console.groupEnd();