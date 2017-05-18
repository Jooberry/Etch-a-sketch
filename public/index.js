var app = function() {
  
  var canvas = document.getElementById("main-canvas");
  var context = canvas.getContext("2d");
  canvas.tabIndex = 1000;

  var xStart = 0;
  var yStart = 0;

  canvas.onclick = function(event){
    console.log(event)
      xStart = event.layerX
      yStart = event.layerY
    }

  canvas.addEventListener("keydown", function(e) {
    if(e.keyCode === 38){
      drawLine(0, -10);
    }
    if(e.keyCode === 40){
      drawLine(0, 10);
    }
    if(e.keyCode === 37){
      drawLine(-10, 0);
    }
    if(e.keyCode === 39){
      drawLine(10, 0);
    }
    if(e.keyCode === 32){
      canvas.width = canvas.width;
    }
  })

  var drawLine = function(x, y){
    context.beginPath()
    context.moveTo(xStart, yStart)
    context.lineTo((xStart + x), (yStart + y))
    context.stroke()


    xStart = xStart + x
    yStart = yStart + y


    if (xStart > 600){
      xStart = 600
    } else if (xStart < 0){
      xStart = 0
    }

    if (yStart > 400){
      yStart = 400
    } else if (yStart < 0){
      yStart = 0
    }

  }

}

window.addEventListener("load", app);