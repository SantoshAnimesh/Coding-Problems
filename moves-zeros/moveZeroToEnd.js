

function moveZeroToEnd(arr){
  let x=0;
  for(let i=0;i<arr.length;i++) {
    if(arr[x] ===0 && arr[i] !==0){
      [arr[x],arr[i]] = [arr[i],arr[x]];
      x++;
    } else if(arr[x] !== 0) {
      x++;
    }
  }
  return arr;
}
const input = [0,1,0,3,12];
console.log(moveZeroToEnd(input)); // [ 1, 3, 12, 0, 0 ]


// ------------- Other approach ------------
function moveZeroToEnd(arr) {
  let left = 0;
  let right = arr.length-1;
while(left < right){
  if(arr[left] ===0 && arr[right] !==0) {
    [arr[left],arr[right]] = [arr[right],arr[left]];
    left++;
    right--;
  }
  if(arr[left] !==0){
    left++;
  }
  if(right===0){
    right--;
  }
}
 
return arr;
}

const input = [0,1,0,3,12];
console.log(moveZeroToEnd(input)); //[ 12, 1, 3, 0, 0 ]
