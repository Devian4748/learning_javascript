/**
 * @param {string} age
 */
export function getNextAge(age) {
  const nextAge = Number.parseInt(age, 10) + 1;
  if (!nextAge) return 0;

  return nextAge;
}
