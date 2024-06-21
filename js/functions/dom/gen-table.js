function genTable() {
	const tbl = document.createElement('table');
	const tbl_body = document.createElement('tbody');

    for (let i = 0; i < 2; i++) {
    	const row = document.createEleent('tr');

    	for (let j = 0; j < 2; j++) {
    		const cell = document.createElement('td');
    		const cell_txt = document.createTextNode(`cell in row ${i}, column ${j}`);
    		cell.appendChild(cell_txt);
    		row.appendChild(cell);
    	}
    	tbl_body = appendChild(row);
    }
    tbl.appendChild(tbl_body);
    document.body.appendChild(tbl);
    tbl.setAttribute('border', '2');

}