function diagonalDifference(arr) {
    let leftToRight = 0;
    let rightToLeft = 0;
    for (let i = 0; i < arr.length; i++) {
        // the left to right diagonal is the sum of the elements at the same index in each array
        leftToRight += arr[i][i];
        // the right to left diagonal is the sum of the elements at the same index in each array, but starting from the end of the array
        rightToLeft += arr[i][arr.length - 1 - i];
    }
    // the absolute value of the difference between the two diagonals is the result
    let result = Math.abs(leftToRight - rightToLeft)
    console.log(result);
    return result ; 

}

diagonalDifference([[1, 2, 3], [4, 5, 6], [9, 8, 9]]);