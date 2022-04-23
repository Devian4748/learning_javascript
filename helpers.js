/**
 * @param {string} text
 */
export function getDescription(text) {
  console.log(text);

  const textLen = text.length;
  if (textLen <= 10) return text;

  return `${text.substring(0, 10)}...`;
}
