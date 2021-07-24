var mouseevent="g";
var last_position_of_x;
var last_position_of_y;

canvas= document.getElementById("myCanvas")
ctx= canvas.getContext("2d");

colour="black";
width_of_line=1;

var width= screen.width
var new_width = width - 70;
var new_height= screen.height- 300;

if (screen.width < 992){
document.getElementById("myCanvas").width= new_width;
document.getElementById("myCanvas").height= new_height;

document.body.style.overflow="hidden";
}

canvas.addEventListener("touchstart", my_touchstart)
function my_touchstart(e){
    colour= document.getElementById("color").value;
    width_of_line= document.getElementById("width_of_line").value;

    last_position_of_x= e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_y= e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove",my_touchmove)
function my_touchmove(e){
    current_x= e.touches[0].clientX - canvas.offsetLeft;
    current_y= e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle= colour
    ctx.lineWidth= width_of_line;
    ctx.moveTo(last_position_of_x, last_position_of_y)
    console.log(last_position_of_x+ ","+last_position_of_y)
    ctx.lineTo(current_x,current_y);
    console.log(current_x+ ","+ current_y)
    ctx.stroke()
   
    last_position_of_x= current_x;
    last_position_of_y= current_y;

}





canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    colour= document.getElementById("color").value;
    width_of_line= document.getElementById("width_of_line").value;

    last_position_of_x= e.clientX - canvas.offsetLeft;
    last_position_of_y= e.clientY - canvas.offsetTop;

    mouseevent= "mousedown";
}

canvas.addEventListener("mousemove",mousemoving);
function mousemoving(e)
{
    current_x= e.clientX - canvas.offsetLeft;
    current_y= e.clientY - canvas.offsetTop;
   
    if (mouseevent == "mousedown"){
        ctx.beginPath();
        ctx.strokeStyle= colour
        ctx.lineWidth= width_of_line;
        ctx.moveTo(last_position_of_x, last_position_of_y)
        console.log(last_position_of_x+ ","+last_position_of_y)
        ctx.lineTo(current_x,current_y);
        console.log(current_x+ ","+ current_y)
        ctx.stroke()
    }
    last_position_of_x= current_x;
    last_position_of_y= current_y;

}
canvas.addEventListener("mouseup", my_mouseup)
function my_mouseup(e){
    mouseevent= "my_mouseup"
}
function clearArea(){
    clearRect(0,0,ctx.canvas.width, ctx.canvas.height)
}