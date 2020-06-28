#define MAX(a,b) (((a)>(b))?(a):(b))

int calcArea(int* heights, int begin, int end){
    if (begin > end) {
        return 0;
    }
    int minIndex = begin;
    for (int i = begin + 1; i <= end; i++) {
        if (heights[i] < heights[minIndex]) {
            minIndex = i;
        }
    }
    int max = MAX(calcArea(heights, begin, minIndex - 1),
                 calcArea(heights, minIndex + 1, end));
    return MAX(heights[minIndex] * (end - begin + 1), max);
    
}

int largestRectangleArea(int* heights, int heightsSize){
    return calcArea(heights, 0, heightsSize - 1);
}

