/**
 * @param {number} timeToLive
 */
var AuthenticationManager = function (timeToLive) {
  this.timeToLive = timeToLive;
  this.currentTime = 0;
  this.tokens = {};
};

/**
 * @param {string} tokenId
 * @param {number} currentTime
 * @return {void}
 */
AuthenticationManager.prototype.generate = function (tokenId, currentTime) {
  this.currentTime = currentTime;
  this.tokens[tokenId] = this.currentTime + this.timeToLive;
};

/**
 * @param {string} tokenId
 * @param {number} currentTime
 * @return {void}
 */
AuthenticationManager.prototype.renew = function (tokenId, currentTime) {
  this.currentTime = currentTime;
  if (this.tokens[tokenId] > this.currentTime) {
    this.tokens[tokenId] = this.currentTime + this.timeToLive;
  } else {
    delete this.tokens[tokenId];
  }
};

/**
 * @param {number} currentTime
 * @return {number}
 */
AuthenticationManager.prototype.countUnexpiredTokens = function (currentTime) {
  this.currentTime = currentTime;
  let count = 0;
  for (let tokenId in this.tokens) {
    if (this.tokens[tokenId] > this.currentTime) {
      count++;
    } else {
      delete this.tokens[tokenId];
    }
  }
  return count;
};

/**
 * Your AuthenticationManager object will be instantiated and called as such:
 * var obj = new AuthenticationManager(timeToLive)
 * obj.generate(tokenId,currentTime)
 * obj.renew(tokenId,currentTime)
 * var param_3 = obj.countUnexpiredTokens(currentTime)
 */
