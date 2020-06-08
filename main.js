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

    for (let rolodex = 0; rolodex < rowElements.length; rolodex += 1){
        let rowIndex = getCellElements(rowElements[rolodex])
    
    for (let sectionIndex = 0; sectionIndex < rowIndex.length; sectionIndex += 1) {
       
        if (rowIndex[sectionIndex].rolodex.includes(findText)) {
            rowIndex[sectionIndex].innerHTML = rowIndex[sectionIndex].innerHTML.replace(findText, replaceText)
        }
    }
    }
})


