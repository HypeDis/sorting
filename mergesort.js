function mergeSort(array){

    if (array.length === 1) {
        return array;
    }

    let [leftArray, rightArray] = split(array);
    leftArray = mergeSort(leftArray);
    rightArray = mergeSort(rightArray);
    return merge(leftArray, rightArray);

}

function split(wholeArray) {
    
    let length = wholeArray.length;
    let midpoint = Math.floor(length/2);

    let leftArray = wholeArray.slice(0, midpoint);
    let rightArray = wholeArray.slice(midpoint, length);

    return [leftArray, rightArray];

}

function merge(leftArray, rightArray) {
    let sortedArray = [];
    //while loop will terminate as soon as either array is empty
    while (leftArray.length > 0 && rightArray.length > 0) {

        if (leftArray[0] <= rightArray[0]) {
            sortedArray.push(leftArray.shift())
        } else if (rightArray[0] <= leftArray[0]) {
            sortedArray.push(rightArray.shift());
        }
    }
    if (leftArray.length > 0) {
        //sortedArray = sortedArray.concat(leftArray);
        sortedArray = [...sortedArray, ...leftArray]; 
    } else {
       sortedArray = [...sortedArray, ...rightArray];
    //    sortedArray = sortedArray.concat(rightArray);
    }
    return sortedArray;
}

console.log(mergeSort([2,5,8,9,9,20,4,3]));