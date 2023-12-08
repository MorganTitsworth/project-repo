import sum from './sum.mjs';

function testSum() {
    let nums = sum.generateRandomArray();
    console.log("Array:", nums);

    let result = sum.simpleArraySum(nums);
    console.log(`Result from sum:`, result);

    let directCheck = nums.reduce((acc, val) => acc + val, 0);

    if (result === directCheck) {
        console.log('good job!');
    } else {
        console.log('try again');
    }
}

testSum();

// const sum = nums.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
//   }, 0);
//       return sum