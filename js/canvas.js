

$(document).ready(function () {
        
            //User Variables
            var canvasWidth = 250;                           //canvas width
            var canvasHeight = 150;                           //canvas height
            var canvas = document.getElementById('canvas');  //canvas element
            var context = canvas.getContext("2d");           //context element
            var clickX = new Array();
            var clickY = new Array();
            var clickDrag = new Array();
            var paint;
            
            canvas.addEventListener("mousedown", mouseDown, false);
                canvas.addEventListener("mousemove", mouseXY, false);
                document.body.addEventListener("mouseup", mouseUp, false);
            
                //For mobile
                canvas.addEventListener("touchstart", mouseDown, false);
                canvas.addEventListener("touchmove", mouseXY, true);
                canvas.addEventListener("touchend", mouseUp, false);
                document.body.addEventListener("touchcancel", mouseUp, false);

            function draw() {
                context.clearRect(0, 0, canvas.width, canvas.height); // Clears the canvas

                context.strokeStyle = "#000000";  //set the "ink" color
                context.lineJoin = "miter";       //line join
                context.lineWidth = 2;            //"ink" width

                for (var i = 0; i < clickX.length; i++) {
                    context.beginPath();                               //create a path
                    if (clickDrag[i] && i) {
                        context.moveTo(clickX[i - 1], clickY[i - 1]);  //move to
                    } else {
                        context.moveTo(clickX[i] - 1, clickY[i]);      //move to
                    }
                    context.lineTo(clickX[i], clickY[i]);              //draw a line
                    context.stroke();                                  //filled with "ink"
                    context.closePath();                               //close path
                }
            }

            //Save the Sig
            $("#saveSig").click(function saveSig() {
                var sigData = canvas.toDataURL("image/png");
                $("#imgData").text(sigData);
            });

            //Clear the Sig
            $('.effacer').click(
                function clearSig() {
                    clickX = new Array();
                    clickY = new Array();
                    clickDrag = new Array();
                    context.clearRect(0, 0, canvas.width, canvas.height);
                    $("#imgData").html('');
        });
            
        function addClick(x, y, dragging) {
                clickX.push(x);
                clickY.push(y);
                clickDrag.push(dragging);
            }

        function mouseXY(e) {
           if (paint) {
                    addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
                    draw();
               }
        }

        function mouseUp() {
            paint = false;
        }

        function mouseDown(e)
        {
            var mouseX = e.pageX - this.offsetLeft;
                var mouseY = e.pageY - this.offsetTop;

                paint = true;
                addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
                draw();
        }
            
        });




function openCanvas(){
    $("#signature").show();
}

function closeCanvas(){
    $("#signature").hide();
}



            
        