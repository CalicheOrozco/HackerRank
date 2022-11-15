const getMaxMin = (array) =>
  array.reduce(
    (acc, element, index) => {
      if (index === 0) {
        acc.max = element;
        acc.min = element;
      }
      if (acc.max < element) {
        acc.max = element;
      }
      if (acc.min > element) {
        acc.min = element;
      }
      return acc;
    },
    { min: 0, max: 0 }
  );

function miniMaxSum(arr) {
  const result = getMaxMin(arr);
  const max = result.max;
  const min = result.min;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  const sumMin = sum - max;
  const sumMax = sum - min;

  console.log(sumMin, sumMax);
}

miniMaxSum([1, 2, 3, 4, 5]);
