// A Function For return the items count from the Array which is not equal to Target in the List;

function getNonRemoveItemsListCount(arr,removeItems) {
  let pointerX = 0;
  for(let i = 0; i< arr.length; i++) {
    if(arr[i] !== removeItems) {
      arr[pointerX] = arr[i];
      pointerX += 1;
    }
  }
  return pointerX
}


const input = [0,1,3,2,4,3,3];
const result = getNonRemoveItemsListCount(input,3);
console.log(result); // 4
