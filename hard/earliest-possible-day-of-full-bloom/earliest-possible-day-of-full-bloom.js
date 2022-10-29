/**
 * @param {number[]} plantTime
 * @param {number[]} growTime
 * @return {number}
 */
var earliestFullBloom = function (plantTime, growTime) {
  const growIndices = Array(plantTime.length)
    .fill()
    .map((v, i) => i);
  growIndices.sort((a, b) => growTime[b] - growTime[a]);
  let totalTime = 0;
  let currentTime = 0;
  for (let i = 0; i < plantTime.length; i++) {
    const index = growIndices[i];
    const time = currentTime + plantTime[index] + growTime[index];
    totalTime = Math.max(totalTime, time);
    currentTime += plantTime[index];
  }
  return totalTime;
};
