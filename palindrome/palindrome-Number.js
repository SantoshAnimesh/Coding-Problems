const val = 121;

function isPalindrome(num) {
  let currentNum = num;
  let revernse = 0;
  while(currentNum > 0) {
    const val = currentNum % 10;
    revernse = revernse * 10 + val;
    currentNum = Math.floor(currentNum / 10) ;
  }
  
  if(num === revernse) {
    return true
  } 
  
  return false;
}

console.log(isPalindrome(val));
