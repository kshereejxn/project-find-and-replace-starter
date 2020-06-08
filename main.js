const findInput = document.querySelector(".find-input")
const replaceInput = document.querySelector(".replace-input")
const replaceAllButton = document.querySelector(".replace-all-button")


const rowElements = document.querySelectorAll(".row")

function getCellElements (currentRowElement) {
    return currentRowElement.querySelectorAll(".cell")
}


// YOUR CODE GOES HERE

replaceAllButton.addEventListener ("click", function(){
    var findText = findInput.value
    var replaceText = replaceInput.value

    for (let innerText = 0; innerText < rowElements.length; innerText += 1){
        let innerCells = getCellElements(rowElements[innerText])
    
    for (let contentCells = 0; contentCells < innerCells.length; contentCells += 1) {
       
        if (innerCells[contentCells].innerText.includes(findText)) {
            innerCells[contentCells].innerHTML = innerCells[contentCells].innerHTML.replace(findText, replaceText)
        }
    }
    }
})


