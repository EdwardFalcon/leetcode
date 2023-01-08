/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function (coordinates) {
  const horizontal = Number(coordinates[1]);
  const vertical = coordinates.charCodeAt(0) - 96;
  return (horizontal + vertical) % 2 !== 0;
};
