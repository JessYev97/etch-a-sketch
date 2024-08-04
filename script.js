
const container = document.getElementById("container");
/* let i=0, n=16;

container.innerHTML = `<div class="rows">${'<div class ="cell">X</div>'.repeat(n)}</div>`.repeat(n).replace(/X/g,_=> (i++).toString(n)) 
*/ 
const gridSize = 16;

for (let i = 0; i < gridSize; i++) {
  const row = document.createElement("div");
  row.classList.add("row");

  for(let j = 0; j < gridSize; j++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    row.appendChild(cell);
  }
  container.appendChild(row);
}
 