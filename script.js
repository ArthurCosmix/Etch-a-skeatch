const GRIDSIDE = 600
//Get element from html element 
const gridButton = document.querySelector(".grid-button")
const resolutionBar = document.querySelector("#sketch-resolution")
const resolutionStatus = document.querySelector(".resolution-status")

    const sketchBoard = document.querySelector("#sketch-board")
function setupSketch(){
    sketchBoard.style.width = sketchBoard.style.height = `${GRIDSIDE}px`
    createSketchBoard(16)
}


//function drawOnSketch
function drawOnSketch(){
    this.style.backgroundColor = "#0b0b0b"
}

function createSketchBoard(squarePerSide){
    sketchBoard.innerHTML = "";

    for(let i = 0; i < (squarePerSide * squarePerSide); i++){
        const gridCell = document.createElement("div")
        gridCell.style.width = gridCell.style.height = `${(GRIDSIDE / squarePerSide)}px`
        gridCell.classList.add("cell")
        sketchBoard.appendChild(gridCell)
        gridCell.addEventListener("mouseover", drawOnSketch)
        gridButton.addEventListener("click", () =>{
            gridCell.style.border = 0
        })
    }
}
  

function showResolution(){
    let resolutionValue = document.querySelector("#sketch-resolution").value
    resolutionStatus.textContent = `${resolutionValue} × ${resolutionValue} (Resolution) `
    createSketchBoard(resolutionValue)
  
}


function run(){
    resolutionBar.addEventListener("change", showResolution)
    setupSketch()
}
run()