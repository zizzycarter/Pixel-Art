// Event Listener to call clearGrid and makeGrid when submit is clicked by the user
$('#sizePicker').submit(function(event) {
    //select size inputs (height and width) and assign to variables
    let gridHeight = $('#inputHeight').val();
    let gridWidth = $('#inputWeight').val();
    event.preventDefault();
    clearGrid();
    makeGrid(gridHeight, gridWidth);
    console.log('Height: '+ gridHeight+ ', Width: '+gridWidth);
})

/**
* @description Divides the pixel canvas into a number of cells and changes the color of each cell when clicked
* @param {int} height  - grid height of the pixel canvas
* @param {int} width - grid width of the pixel canvas
*/
function makeGrid(height, width) {
    console.log('makeGrid function is running');
    //selects the pixel canvas id and assigns it to a variable
    let pixelCanvas = $('#pixelCanvas');
    //creates rows within the pixel canvas 
    for (let i= 0; i < height; i++) {
        pixelCanvas.append('<tr></tr>');
    }
    // selects rows of the pixel canvas and assign them to a variable
    let canvasRows = $('tr');
    //creates cells within each row of the pixel canvas
    for (let j= 0; j < width; j++) {
        canvasRows.append('<td></td>');
    }
    //selects the cells and assign them to a variable
    let canvasCells = $('td');
    //Event listener that sets the background color of the cell to the user's selected color 
    canvasCells.click(function(){
        console.log('color picker is running');
        const color = $('#colorPicker').val();
        $(this).attr('bgcolor', color);
    })
}

/**
* @description Clears and refreshes the pixel canvas
*/
function clearGrid(){
    console.log('clearGrid function is running');
    let pixelCanvas = $('#pixelCanvas');
    pixelCanvas.children().remove();
}

