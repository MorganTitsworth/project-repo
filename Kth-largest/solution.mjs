import kth from './kth.mjs';

function testFindKthLargest() {
    let nums = kth.generateRandomArray();
    console.log("Array:", nums);

    let k = 2;

    let result = kth.findKthLargest(nums, k);
    console.log(`Result from findKthLargest for k=${k}:`, result);

    let sortedArray = [...nums].sort((a, b) => b - a);
    let directCheck = sortedArray[k - 1];

    if (result === directCheck) {
        console.log('good job!');
    } else {
        console.log('try again');
    }
}

testFindKthLargest();

// let sortedArray = [...nums].sort((a, b) => b - a);
// let directCheck = sortedArray[k - 1];
// return directCheck