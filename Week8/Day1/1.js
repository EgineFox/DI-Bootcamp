function insertRow() {
    const table = document.getElementById("sampleTable");

    const newRow = table.insertRow();

    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    
    // Add content to the new cells
    const rowCount = table.rows.length;
    cell1.textContent = `Row${rowCount} cell1`;
    cell2.textContent = `Row${rowCount} cell2`;
}     

/*const newRow = document.createElement("tr");
                for (let i = 0; i < 2; i++) {
                        const newCol = document.createElement("td");
                        newCol.appendChild(document.createTextNode("new"))
                        newRow.appendChild(newCol);
                }
                marker.parentNode.prepend(newRow);

*/