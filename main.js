//Create the recursive function
function mergeSort(array) {
  //If the inputed arrays length is less than or equal to one, then there is no need to sort it, as it is already sorted.
  if (array.length <= 1) {
    return array;
    //Thus you would return the array as is
  }

  //Find the middle of the array, and in order to make sure there are no decimals round down
  let mid = Math.floor(array.length / 2);
  //The left side of the array which is simply the first index to the middle
  let left = array.slice(0, mid);
  //The right side which is the middle and anything onward
  let right = array.slice(mid);

  //keep recursively repeating until the left side is sorted, and the right side is sorted
  left = mergeSort(left);
  right = mergeSort(right);

  //Input them into the merge function
  return merge(left, right);
}

function merge(left, right) {
  //Result is where the final sortedArray will be stored
  let result = [];

  //Have pointers in order to see indexes of left, and right side -- they started at  0 as it is an array
  let i = 0;
  let j = 0;

  //While the pointer of the left/right side is less than the arrays length continue, else stop.
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      //If the value of the left array at the left pointer is less than the right array at the right pointer, then push the lefts value
      result.push(left[i++]);
    } else {
      //Else vice versa
      result.push(right[j++]);
    }
  }

  //This is for values that have nothing to pit against
  while (i < left.length) {
    //Once again checking to see if the pointer is less than the array, and if it is simply push it since there is no comparision
    result.push(left[i++]);
  }
  while (j < right.length) {
    //Same for the right side
    result.push(right[j++]);
  }

  //Return the result
  return result;
}
