
// Optimal Solutions
function mergeSortedArr(arr1,n,arr2,m) {
  let i= n-1;
  let j= m-1;
  let k= m+n -1;
  
  arr1.length = m+n;
  
  while(i>= 0 && j >= 0) {
    if(arr1[i] > arr2[j]) {
      arr1[k] = arr1[i];
      i--;
    } else {
      arr1[k] = arr2[j];
      j--
    }
    k--
  }
  
  while(j >= 0) {
    arr1[k] = arr[j];
    j--;
    k--;
  }
  
  return arr1;
}


const arr1 = [0,1,1,4,6]
const arr2 =  [1,2,3,4];


console.log(mergeSortedArr(arr1,5,arr2,4))//. [0, 1, 1, 1, 2,3, 4, 4, 6]
// Complexity:
Time: O(n + m) (each element compared once)
Space: O(1) (in-place merge, no extra array)
