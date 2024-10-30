/**
 * Calculate the distance between two points represented on the standard Planar coordinate system
 * with precision 2 decimal places
 * Each Point represented by object contains two property (X and Y)
 * @param {Object} firstPoint
 * @param {Object} secondPoint
 * @returns {number}
 */
module.exports.getDistance = function getDistance(firstPoint, secondPoint) {
  // d=sqr((x2-x1)^2+(y2-y1)^2)
  // testing commit to origin
  const res = Math.sqrt((secondPoint.X - firstPoint.X) ** 2 + (secondPoint.Y - firstPoint.Y) ** 2);
  return res.toFixed(2);
};
