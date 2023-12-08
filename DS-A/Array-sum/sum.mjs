function generateRandomArray() {

    const length = Math.floor(Math.random() * 10) + 1;
    const randomArray = Array.from({length}, () => Math.floor(Math.random() * 100));

    return randomArray;
}


function simpleArraySum(nums) {

}

export default { generateRandomArray, simpleArraySum };