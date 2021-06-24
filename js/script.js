

// create canvas element and append it to document body
var canvas = document.createElement('canvas');
var everything = document.getElementById("everything");
// document.body.appendChild(canvas);
everything.appendChild(canvas);
// some hotfixes... ( ≖_≖)
// document.body.style.margin = 0;
canvas.style.marginTop = "-5%";
canvas.style.marginLeft = "-10%";
canvas.style.position = 'absolute';
canvas.style.zIndex = -1;

// get canvas 2D context and set him correct size
var ctx = canvas.getContext('2d');
resize();

// last known position
var pos = { x: 0, y:0 };

window.addEventListener('resize', resize);
document.addEventListener('mousemove', draw);
document.addEventListener('mousedown', setPosition);
document.addEventListener('mouseenter', setPosition);

// new position from mouse event
function setPosition(e) {
  pos.x = e.clientX;
  pos.y = e.clientY;
}

// resize canvas
function resize() {
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
}


function randomcolor() {
    return "hsl(" + Math.random() * 360 + ",100%,50%)";
    }


function draw(e) {
  // mouse left button must be pressed
  if (e.buttons !== 1) return;

  ctx.beginPath(); // begin

  ctx.lineWidth = 5;
  ctx.lineCap = 'round';
  ctx.strokeStyle = "darkgrey";

  ctx.moveTo(pos.x, pos.y); // from
  setPosition(e);
  ctx.lineTo(pos.x, pos.y); // to

  ctx.stroke(); // draw it!
}

function save() {
        // document.getElementById("canvasimg").style.border = "2px solid";
        // var dataURL = canvas.toDataURL();
        // document.getElementById("canvasimg").src = dataURL;
        // document.getElementById("canvasimg").style.display = "inline";

//         html2canvas(document.querySelector("#capture")).then(canvas => {
//     document.body.appendChild(canvas)
// });
// windowbutton.addEventListener("click", openManyWindows);
// html2canvas(document.body).then(function(canvas) {
//     document.querySelector("#capture").appendChild(canvas);
// });
html2canvas(document.body).then(function(canvas) {
    // Export the canvas to its data URI representation
    var base64image = canvas.toDataURL("image/png");

    function debugBase64(base64URL){
        var win = window.open();
        win.document.write('<iframe src="' + base64URL  + '" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>');
    }
    // Open the image in a new window
    debugBase64(base64image);
});
}

////////////////////////////////
// function openWindow(){
//
//   let ranX = Math.random()*sw - popupWidth;
//   let ranY = Math.random()*sh - popupHeight;
//
//   let specifications = "width="+popupWidth+", height="+popupHeight+", left="+ranX+", top="+ranY;
//
//   let url =  "balls";
//
//   let win = window.open(url, "", specifications);
//
//   let ranTime = 3000 + Math.random()*1000;
//
//   setTimeout(()=>{
//     win.close();
//   }, ranTime);
// }


function erase() {
        var m = confirm("Want to clear");
        if (m) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            //
            // let blank = document.createElement('div');
            // querySelector("canvas").innerHTML = blank.innerHTML;
        }
}
