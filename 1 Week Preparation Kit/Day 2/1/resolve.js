function lonelyinteger(a) {
  let lonely = a.filter((element) => {
    // for any element in the array, if the index of the element is the same as the last index of the element, then it is a lonely integer
    return a.indexOf(element) === a.lastIndexOf(element);
  });
  console.log(lonely[0]);
  return lonely[0];
}

function lonelyinteger2(a) {
    let result = 0;
    for (let i = 0; i < a.length; i++) {
        // XOR is a binary operator that returns 1 if the two operands are different and 0 if they are the same
        result ^= a[i];
    }
    console.log(result);
    return result;
}

lonelyinteger([1, 2, 3, 4, 3, 2, 1]);
