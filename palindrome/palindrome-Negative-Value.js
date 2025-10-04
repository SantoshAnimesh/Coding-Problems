// This is valid code for check Plindrome from Positive or Negative number .

function isPalindrome(num) {
  let currentNum = Math.abs(num);
  let revernse = 0;
  while(currentNum > 0) {
    const val = currentNum % 10;
    revernse = revernse * 10 + val;
    currentNum = Math.floor(currentNum / 10) ;
  }
  revernse = num < 0 ? -revernse : revernse;
  
  return num === revernse ? true : false; 
}

const val = -1210;
console.log(isPalindrome(val));
