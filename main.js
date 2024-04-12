var mouseEvent = "empty";



canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "orange";
radius = 10;
width_of_line = 3;


canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
    color - document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    radius = document.getElementById("radius").value;
    mouseEvent = "mouseDown"
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e)
{
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown") {
    
       ctx.beginPath();
       ctx.strokeStyle = "red";
       ctx.lineWidth = 2;
       ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius, 0, 2 * Math.PI);
       ctx.stroke();

       console.log("Current position of x and y coordintes = ");
       console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
    }

    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;
}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e)
{
    mouseEvent = "mouseUP";
}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e)
{
    mouseEvent = "mouseleave";
}

var current_position_of_mouse_x, current_position_of_mouse_y;




