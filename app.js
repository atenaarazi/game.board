const grid =document.querySelector('.grid')
const resultsDisplay = document.querySelector('.results')
const width = 15
for( let i = 0; i < width * width; i++){
    const square = document.createElement('div')
    grid.appendChild(square)
}
Array.from(document.querySelectorAll('.grid div'))