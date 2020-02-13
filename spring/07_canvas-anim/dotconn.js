var canvas = document.getElementById('playground');
var ctx = canvas.getContext('2d');
var start_butt = document.getElementById('start');
var stop_butt = document.getElementById('stop');
var start = null;
// This stores the animation variable created with requestAnimationFrame();
var draw_animation = null; 
// var clear_animation = null;
var radius = 0;
var isExpanding = true;

var drawCircle = function() {
  // Commented code to be used if you want to periodically do something
  // if(!start) start = timestamp;
  // var progress = timestamp - start;
  // if(progress % 10) {
  //   clear_animation = window.requestAnimationFrame(clear);
  // }
  // console.log(timestamp);
  ctx.clearRect(0, 0, canvas.width, canvas.height); // clear canvas to allow circle to retract
  drawCircleH(radius);
  //window.requestAnimationFrame returns id to stop it by
  draw_animation = window.requestAnimationFrame(drawCircle);
  if(radius <= 0) isExpanding = true;
  if(radius >= canvas.width / 2) isExpanding = false;
  radius += isExpanding ? 1 : -1;
};

var drawCircleH = function(radius) {
  ctx.beginPath();
  ctx.arc(canvas.width / 2, canvas.height / 2, radius, 0, Math.PI * 2);
  ctx.fill();
};

start_butt.addEventListener('click', () => {
  if(!draw_animation) {
    drawCircle();
  }
});
stop_butt.addEventListener('click', () => {
  window.cancelAnimationFrame(draw_animation);
  draw_animation = null;
});

document.getElementById('clear').addEventListener('click', () => {
  console.log(animation);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});
