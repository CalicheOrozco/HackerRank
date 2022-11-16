function findMedian(arr) {
    // Order the array from smallest to largest
    arr.sort((a, b) => a - b);
    // Find the middle index
    const mid = Math.floor(arr.length / 2);
    // If the array has an even number of elements, return the average of the two middle elements
    result = arr.length % 2 !== 0 ? arr[mid] : (arr[mid - 1] + arr[mid]) / 2;
    return result;
}

findMedian([0, 1, 2, 4, 6, 5, 3]);
