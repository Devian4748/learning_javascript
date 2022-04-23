/**
 * @param {string} label
 * @param {string} value
 */
export function renderTableRow(label, value) {
  console.log(label, value);

  return `<tr><td>${label}</td><td>${value}</td></tr>`;
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
