
/**
* @description Divides the pixel canvas into a numnber of cells changes the color of each cell when clicked
*/
function makeGrid() {
    // Select pixel canvas and size inputs (height and weight) and assign them to variables
    let pixelCanvas = $('#pixelCanvas');
    const gridHeight = $('#inputHeight').val();
    const gridWidth = $('#inputWeight').val();

    //create rows within the pixel canvas 
    for (let i= 0; i < gridHeight; i++) {
        pixelCanvas.append('<tr></tr>');
    }
    // select the rows of the pixel canvas and assigns it to a variable
    const canvasRows = $('tr');

    //create cells within each row of pixel canvas
    for (let j= 0; j < gridWidth; j++) {
        canvasRows.append('<td></td>');
    }
    //select the cells and assign it to a variable
    let canvasCells = pixelCanvas.find('td');

    //change the color of the each cell when it is clicked by the user
    canvasCells.click(function(){
        //select the value of the color inputted by the user and assign to a variable
        let color = $('#colorPicker').val();
        //change the background color of the cell to the color selected by the user
        $(this).attr('bgcolor', color);
    })
}

/**
* @description Clears and refreshes the pixel canvas
*/
function clearGrid(){
    let pixelCanvas = $('#pixelCanvas');
    pixelCanvas.children().remove();
}

// When size is submitted by the user, call clearGrid to refresh and makeGrid() to build the grid
var sizePicker = $('#sizePicker');
sizePicker.submit(function(event) {
event.preventDefault();
clearGrid();
makeGrid();
})