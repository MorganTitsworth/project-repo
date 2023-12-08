// ---------------------------- CODE NOT HERE ---------------------------- //

function generateRandomArray() {

    const length = Math.floor(Math.random() * 10) + 1;


    const randomArray = Array.from({length}, () => Math.floor(Math.random() * 100));

    return randomArray;
}
let nums = generateRandomArray();
console.log(nums)
// ---------------------------- CODE NOT HERE ---------------------------- //


// ---------------------------- CODE HERE ---------------------------- //
// Change value here to test different k values
let k = 2;
var findKthLargest = function(nums, k) {

};
export default { generateRandomArray, findKthLargest };
