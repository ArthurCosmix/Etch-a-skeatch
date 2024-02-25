const GRIDSIDE = 600
const squarePerSide = 50
//Get element from html element 
const gridButton = document.querySelector(".grid-button")
const resolutionBar = document.querySelector("#sketch-resolution")
let resolutionValue = document.querySelector("#sketch-resolution").value
const resolutionStatus = document.querySelector(".resolution-status")

function showResolution(){
    resolutionStatus.textContent = `${resolutionValue} × ${resolutionValue} (Resolution) `
}



const sketchBoard = document.querySelector("#sketch-board")
sketchBoard.style.width = sketchBoard.style.height = `${GRIDSIDE}px`

//function drawOnSketch
function drawOnSketch(){
    this.style.backgroundColor = "black"
}

function createSketchBoard(squarePerSide){
    for(let i = 0; i < (squarePerSide * squarePerSide); i++){
        const gridCell = document.createElement("div")
        gridCell.style.width = gridCell.style.height = `${(GRIDSIDE / squarePerSide)}px`
        gridCell.classList.add("cell")
        sketchBoard.appendChild(gridCell)
        gridCell.addEventListener("mouseover", drawOnSketch)
    }
    }
  

function run(){
    createSketchBoard(squarePerSide)
}
run()