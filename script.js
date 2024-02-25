const GRIDSIDE = 600
const squarePerSide = 16

const sketchBoard = document.querySelector("#sketch-board")
sketchBoard.style.width = sketchBoard.style.height = `${GRIDSIDE}px`

function createSketchBoard(){
    for(let i = 0; i < (squarePerSide * squarePerSide); i++){
        const gridCell = document.createElement("div")
        gridCell.style.width = gridCell.style.height = `${(GRIDSIDE / squarePerSide)}px`
        gridCell.classList.add("cell")
        sketchBoard.appendChild(gridCell)
        
    }
}
createSketchBoard()