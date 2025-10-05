
// A function which return max-Profit to Buy/sell stocks 

// ------- Brute Force ------------
function findMaxBuySellProfit(arr) {
  let minBuyStocks = arr[0];
  let maxProfit = 0;
  
  for(let i=0; i< arr.length; i++) {
    if(arr[i]- minBuyStocks > maxProfit) {
      maxProfit = arr[i] - minBuyStocks;
    }
    if(arr[i] < minBuyStocks) {
      minBuyStocks = arr[i];
    }
    
  }
  
  return maxProfit
}



// ------ Optimal-Solution --------------------
function findMaxProfit(arr) {
  let maxProfit = 0;
  for(let i=0; i< arr.length; i++) {
    for(let j=i; j< arr.length; j++) {
      const singleDyaProfit = arr[j] - arr[i];
      if(singleDyaProfit > maxProfit) {
        maxProfit = singleDyaProfit;
      }
    }
  }
  
  return maxProfit;
}

const input = [7,1,5,3,6,4]
console.log(findMaxBuySellProfit(input)); // 5

