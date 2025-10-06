
// A functon which return a largest element From the Array

function LargestElementInArray(arr) {
  if(arr.length <= 0) return "Argument Length at least should be one";
  let x = -Infinity;
  for(let i=0; i< arr.length;i++) {
    if(arr[i] > x) {
      x = arr[i];
    }
  }
  return x;
}

const input = [];
const result = LargestElementInArray(input);
console.log(result); // 6
