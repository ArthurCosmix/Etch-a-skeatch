const GRIDSIDE = 600
//Get element from html element 
const gridButton = document.querySelector(".grid-button")
const eraserButton = document.querySelector(".eraser-button")
const clearButton =document.querySelector(".clear-button")
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

const gridCellContainer = []
function createSketchBoard(squarePerSide){
    sketchBoard.innerHTML = "";

    for(let i = 0; i < (squarePerSide * squarePerSide); i++){
        const gridCell = document.createElement("div")
        gridCell.style.width = gridCell.style.height = `${(GRIDSIDE / squarePerSide)}px`
        gridCell.classList.add("cell")
        sketchBoard.appendChild(gridCell)
        gridCell.addEventListener("mouseover", drawOnSketch)
        gridButton.addEventListener("click", () =>{
            gridCell.classList.toggle("active")
        })

        clearButton.addEventListener("click", () =>{
            gridCell.style.backgroundColor = "#fff"
        })
        gridCellContainer.push(gridCell)
    }

}

function eraserSketch(){
    eraserButton.classList.toggle("eraser")
    if(eraserButton.classList.contains("eraser")) {
        console.log(true)
        gridCellContainer.forEach((gridCell) =>{
            gridCell.addEventListener("mouseover", () => gridCell.style.backgroundColor = "#fff")
           
        })
    }else{
        console.log(false)
        gridCellContainer.forEach((gridCell) =>{
            gridCell.addEventListener("mouseover",() => gridCell.style.backgroundColor = "#0b0b0b" )
        })
    }
}
  

function showResolution(){
    let resolutionValue = document.querySelector("#sketch-resolution").value
    resolutionStatus.textContent = `${resolutionValue} × ${resolutionValue} (Resolution) `
    createSketchBoard(resolutionValue)
}



function run(){
    eraserButton.addEventListener("click", eraserSketch)
    resolutionBar.addEventListener("change", showResolution)
    setupSketch()

}
run()
