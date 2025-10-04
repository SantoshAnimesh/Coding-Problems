// A Function For return number count of unique items from then Sorted Non-Decreasing Array

function findUniqueItemsCount(arr) {
  let pointerX = 0;
  for(let i = 0; i< arr.length; i++) {
    if(arr[i] > arr[pointerX]) {
      pointerX += 1;
      arr[pointerX] = arr[i];
    }
  }
  
  return pointerX + 1;
}

const input = [0,0,1,1,1,2,2,3,3,4];
const result = findUniqueItemsCount(input);
console.log(result); // 5
