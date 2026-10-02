/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice =prices[0];
    let maxProfit =0;

    for(let i=0; i<prices.length; i++){
        //Current day par sell karne ka profit
        let profit = prices[i] - minPrice;

        //maximum profit update kiya
        if(profit> maxProfit){
            maxProfit = profit;
        }

        //Minimum buying price update kiya 
        if(prices[i]<minPrice){
            minPrice = prices[i];
        }
    }

    return maxProfit;
};