/*let currentZoom = 1;
let minZoom = 1;
let maxZoom = 3;
let stepSize = 0.1;

let container = document.getElementById("image-container");

console.log("Container: ", container);

container.addEventListener("wheel", function(event) {
    // Zoom in or out based on the scroll direction
    let direction = event.deltaY > 0 ? -1 : 1;
    zoomImage(direction);
});

function zoomImage(direction)
{
    let newZoom = currentZoom + direction * stepSize;

    // Limit the zoom level to the minimum and maximum
    // values
    if (newZoom < minZoom || newZoom > maxZoom) {
        return;
    }

    currentZoom = newZoom;

    // Update the CSS transform of the image to scale it
    let image
        = document.querySelector("#image-container img");
    image.style.transform = "scale(" + currentZoom + ")";
}

function buttonTest() {
    console.log("Button Tested!!!");
}*/
//----------------------------X-------------------------------------------------------X----------------------------------
//Drag Test (Source: https://jsfiddle.net/jFQEW/4/)

var clicking = false;
var previousX;
var previousY;

$(document).mousedown(function(e) {

    e.preventDefault();
    previousX = e.clientX;
    previousY = e.clientY;
    clicking = true;
});

$(document).mouseup(function() {
    clicking = false;
});

$(document).mousemove(function(e) {
    if (clicking) {
        e.preventDefault();
        var directionX = (previousX - e.clientX) > 0 ? 1 : -1;
        var directionY = (previousY - e.clientY) > 0 ? 1 : -1;
        $(document).scrollLeft($(document).scrollLeft() + 30 * directionX);
        $(document).scrollTop($(document).scrollTop() + 30 * directionY);
        previousX = e.clientX;
        previousY = e.clientY;
    }
});