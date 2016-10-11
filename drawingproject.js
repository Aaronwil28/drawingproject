var canvasDiv = document.getElementById("drawingArea");
var canvas = canvasDiv.getContext('2d');

canvas.beginPath();
canvas.fillStyle = "yellow";
canvas.arc(640,700,70,0,2*Math.PI,true);
canvas.fill();


//House 1
canvas.beginPath();
canvas.fillStyle = "black";
canvas.arc(30,230,20,20,Math.PI,true);
canvas.fill();
canvas.fillRect(0,250,100,100);

canvas.beginPath();
canvas.fillStyle = "gray";
canvas.fillRect(0,260,100,100);

canvas.beginPath();
canvas.fillStyle = "purple"
canvas.fillRect(0,300,30,10)

canvas.beginPath();
canvas.fillStyle = "purple"
canvas.fillRect(0,330,15,10)

canvas.beginPath();
canvas.fillStyle = "black";
canvas.fillRect(0,260,100,100);

//House 2

canvas.beginPath();
canvas.fillStyle = "gray";
canvas.fill();
canvas.fillRect(250,250,100,100);

canvas.beginPath();
canvas.fillStyle = "Gray";
canvas.fillRect(250,260,100,100);

canvas.beginPath();
canvas.fillStyle = "purple"
canvas.fillRect(250,300,50,10)
canvas.beginPath();
canvas.fillStyle = "red";
canvas.fillRect(0,360,950,10);


canvas.beginPath();
canvas.fillStyle = "gray";
canvas.arc(210,100,240,320,Math.PI,true);
//SkyScraper

canvas.beginPath();
canvas.fillStyle = "gray";
canvas.fillRect(500,260,100,100);


canvas.beginPath();
canvas.fillStyle = "yellow";
canvas.arc(240,700,70,0,2*Math.PI,true);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "red";
canvas.fillRect(0,250,950,10);
//

canvas.beginPath();
canvas.fillStyle = "gray";
canvas.arc(200,100,240,320,Math.PI,true);

canvas.beginPath();
canvas.fillStyle = "red";
canvas.fillRect(0,450,750,250);

canvas.beginPath();
canvas.fillStyle = "gray";
canvas.arc(120,100,240,320,Math.PI,true);

canvas.fillStyle = "blue";
canvas.arc(0,420,20,20,Math.PI,true);

canvas.beginPath();
canvas.fillStyle = "gray";
canvas.fillRect(500,490,250,100);

canvas.beginPath();
canvas.fillStyle = "yellow";
canvas.arc(460,700,70,0,2*Math.PI,true);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "yellow";
canvas.arc(120,700,70,0,2*Math.PI,true);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "gray";
canvas.fillRect(120,490,150,100);

canvas.beginPath();
canvas.fillStyle = "gray";
canvas.fillRect(120,490,230,100);


canvas.beginPath();
canvas.fillStyle = "blue";
canvas.moveTo(800,122);
canvas.lineTo(820,126);
canvas.lineTo(500,430);
canvas.fill();
