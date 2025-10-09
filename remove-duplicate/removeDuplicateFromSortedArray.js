


// A Funtion which return non-duplicate items and accept sorted array

function removeDubplicate(arr) {
  const length = arr.length;
  let x = 0;
  for(let i=1;i< length;i++) {
    arr[i-x] = arr[i];
    if(arr[i-1] === arr[i]) {
      x++;
    }
  }
  arr.length = length - x;
  return arr;
}

const input = [0,0,0,1,1,2,4,5,5];
console.log(removeDubplicate(input)) // [ 0, 1, 2, 4, 5 ]
