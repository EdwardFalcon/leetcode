/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function (secret, guess) {
  const secretCount = Array(10).fill(0);
  const guessCount = Array(10).fill(0);
  let bulls = 0;
  for (let i = 0; i < secret.length; i++) {
    if (secret[i] === guess[i]) {
      bulls++;
    } else {
      secretCount[secret[i]]++;
      guessCount[guess[i]]++;
    }
  }
  let cows = 0;
  for (let i = 0; i < 10; i++) {
    cows += Math.min(secretCount[i], guessCount[i]);
  }
  return `${bulls}A${cows}B`;
};
