int numTrees(int n){
    int* res = malloc((n + 1) * sizeof(int));
    res[0] = 1;
    res[1] = 1;
    for (int i = 2; i <= n; i++) {
        res[i] = 0;        
        for (int j = 1; j <= i; j++) {
            res[i] += res[j - 1] * res[i - j];
        }        
    }    
    return res[n];   

}