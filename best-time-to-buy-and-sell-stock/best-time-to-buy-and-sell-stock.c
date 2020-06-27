int maxProfit(int* prices, int pricesSize){
    int max = 0;
    int minPrice = INT_MAX;
    for (int i = 0; i < pricesSize; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
         } else if (prices[i] - minPrice > max) {
            max = prices[i] - minPrice;
         }
    }
    return max;    
}