import { renderTableRow, renderTableRows } from './nutrition.js';

const data = [
  ['Carbs', '17g'],
  ['Protein', '19g'],
  ['Fat', '5g'],
];
let html = renderTableRows(data);

const tbody = document.querySelector('#nutrition-table tbody');
tbody.insertAdjacentHTML('beforeend', html);
