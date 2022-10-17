/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  const stack = [];
  for (a of asteroids) {
    stack.push(a);
    collide(stack);
  }
  return stack;
};

var collide = function (stack) {
  if (
    stack.length < 2 ||
    stack[stack.length - 1] > 0 ||
    stack[stack.length - 2] < 0
  ) {
    return;
  }
  const left = stack.pop();
  const right = stack.pop();
  if (left === -right) {
    return;
  }
  if (left < -right) {
    stack.push(left);
    collide(stack);
  } else {
    stack.push(right);
  }
};
