function missingNumber(arr) {
  if(!arr || arr.length <= 0) return 0;
  let actualSum = 0;
  let min = arr[0];
  let max = 0;
  for(let i=0;i<arr.length;i++){
    actualSum += arr[i];
    if(min > arr[i]) {
      min = arr[i];
    }
    if(arr[i] > max){
      max = arr[i];
    }
  }
  
  const count = (max-min) + 1;
  const aspectedSum = (count * (min+max)) /2;
  
  return aspectedSum - actualSum;
}

const input = [1,3];
console.log(missingNumber(input));
// TomeComplexity : O(n)
// Space-Complexity: O(1)



function missingNumber(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const count = (max-min) + 1;
  const expectedSum = (count * (min+max)) /2 ;
  let actualSum = 0;
  for(let i=0;i<arr.length;i++) {
    actualSum += arr[i];
  }
  return expectedSum - actualSum;
}

const input = [1,3];
console.log(missingNumber(input)); //2

// Timecomplexity = O(n)
// SpaceComplexity: O(n)
