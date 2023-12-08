// ---------------------------- CODE NOT HERE ---------------------------- //

function generateRandomArray() {

    const length = Math.floor(Math.random() * 10) + 1;


    const randomArray = Array.from({length}, () => Math.floor(Math.random() * 100));

    return randomArray;
}
let nums = generateRandomArray();
// ---------------------------- CODE NOT HERE ---------------------------- //

// ['anything', inside, {theArray}, [is, valid], 1, 2, 3]


// K WILL ALWAYS == 2


// ---------------------------- CODE HERE ---------------------------- //
// Change value here to test different k values
var findKthLargest = function(nums, k) {


};
export default { generateRandomArray, findKthLargest };