function genTable(rows, cells) {
  let baseTable = document.createElement('table');
  let populated = populate(rows, cells);
  let table = bindTable(baseTable, populated);
  return table;
}

function bindTable(table, body) {
  let app = document.querySelector('#app');
  app.appendChild(table)
  table.appendChild(body);
  table.setAttribute('border', '2');
  return table;
}

function populate(rows, cells) { 
  const body = document.createElement('tbody');
  for (let i = 0; i < rows; i++) {
    const row = document.createEleent('tr');
    for (let j = 0; j < cells; j++) {
    		const cell = document.createElement('td');
    		const text = document.createTextNode(`cell:${i} row:${j}`);
    		cell.appendChild(cell_txt);
    		row.appendChild(cell);
    }
    body.appendChild(row);
  }
  return body;
}


