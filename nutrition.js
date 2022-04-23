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
  console.log(rows);

  let tableRows = '';

  rows.forEach(function (row) {
    tableRows += `<tr>
      <td>${row[0]}</td>
      <td>${row[1]}</td>
    </tr>`;
  });

  return tableRows;
}
