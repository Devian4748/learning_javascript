/**
 * @param {number[]} ages
 */

export function getVotersCount(ages) {
  return ages.filter(function (age) {
    return age >= 10;
  }).length;
}
