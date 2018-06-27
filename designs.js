//selects the pixel canvas and color ids and assign them to variables
const pixel_canvas = $('#pixelCanvas');
const color = $('#colorPicker');

// Event Listener to call clearGrid and makeGrid when submit button is clicked by the user
$('#sizePicker').submit(function(event) {
    //select size inputs (height and width) and assign to variables
    let grid_height = $('#inputHeight').val();
    let grid_width = $('#inputWeight').val();

    //prevents the button from submitting the form as an HTTP GET request
    event.preventDefault();
    
    clearGrid();
    makeGrid(grid_height, grid_width);
    console.log('Height: '+ grid_height+ ', Width: '+grid_width);
})

//Event listener that sets the background color of each cell (<td>), when clicked, to the user's selected color
pixel_canvas.on('click','td', function(){
    console.log('color picker is running');
    $(this).css('background-color', color.val());
})

/**
* @description Divides the pixel canvas into a number of cells and changes the color of each cell when clicked
* @param {int} height  - grid height of the pixel canvas
* @param {int} width - grid width of the pixel canvas
*/
function makeGrid(height, width) {
    console.log('makeGrid is running');

    //selects the pixel canvas id and assigns it to a variable
    let pixel_canvas = $('#pixelCanvas');

    //creates rows within the pixel canvas 
    for (let i= 0; i < height; i++) {
        pixel_canvas.append('<tr></tr>');
    }

    // selects rows of the pixel canvas and assign them to a variable
    let canvas_rows = $('tr');

    //creates cells within each row of the pixel canvas
    for (let j= 0; j < width; j++) {
        canvas_rows.append('<td></td>');
    }
<<<<<<< HEAD
=======
    //selects the cells and assign them to a variable
    let canvasCells = $('td');
    //Event listener that sets the background color of the cell to the user's selected color 
    canvasCells.click(function(){
        console.log('color picker is running');
        const color = $('#colorPicker').val();
        $(this).attr('bgcolor', color);
    })
>>>>>>> 2d8a54ba55146f5d2c15a3da6b525ce2a2e487e1
}

/**
* @description Clears and refreshes the pixel canvas
*/
function clearGrid(){
    console.log('clearGrid is running');
    pixel_canvas.children().remove();
}
