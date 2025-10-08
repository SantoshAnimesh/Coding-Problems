function binarySearch(nums,target) {
  let left = 0;
  let right = nums.length -1;
  while(left <= right) {
    const mid = Math.floor((left + right) /2 );
    if(target === nums[mid]) {
      return mid;
    }
    if(target > mid ) {
      left = mid + 1;
    } else {
      right = mid-1;
    }
  }
  
  return -1;
}

const input = [-1,0,3,5,9,12];
const input1 = [9];
const target = 9;
console.log(binarySearch(input,target)); // 4

Time Complexity : O( log n);
Space complexity: O(1)
