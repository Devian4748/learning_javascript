/**
 * @param {Object} details
 * @param {string} details.title
 * @param {number} details.value
 */
export function renderTableRow(details) {
  return `<tr><td>${details.title}</td><td>${details.value}g</td></tr>`;
}

/**
 * @param {array[][]} rows
 */
export function renderTableRows(rows) {
  return rows
    .map(row => `<tr><td>${row[0]}</td><td>${row[1]}</td></tr>`)
    .join('');
}
