/**
 * @param {string} number
 */
export function getDivisionRemainderBy2(number) {
  return Number.parseInt(number, 10) % 2;
}

/**
 * @param {string} number
 */
export function evenOrOdd(number) {
  const absNum = Math.abs(Number.parseInt(number, 10));

  return absNum % 2 === 0 ? 'even' : 'odd';
}
