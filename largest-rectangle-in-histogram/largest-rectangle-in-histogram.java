class Solution {
  public int largestRectangleArea(int[] heights) {
      return calcArea(heights, 0, heights.length - 1);
  }
    
  private int calcArea(int[] heights, int begin, int end) {
      if (begin > end) {
          return 0;
      }
      int minIndex = begin;
      for (int i = begin + 1; i <= end; i++) {
          if (heights[i] < heights[minIndex]) {
              minIndex = i;
          }
      }
      int max = Math.max(calcArea(heights, begin, minIndex - 1),
                         calcArea(heights, minIndex + 1, end));
      return Math.max(heights[minIndex] * (end - begin + 1), max);
      }
}