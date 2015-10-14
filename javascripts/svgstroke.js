$(function(){
  path = new Array([]);
  length = new Array([]);
  for(var i = 0; i < 16; i++) {
    path[i] = document.getElementById('path'+i);
    length[i] = path[i].getTotalLength();
    path[i].style.transition = path[i].style.WebkitTransition = 'none';
    path[i].style.strokeDasharray = length[i] + ' ' + length[i];
    path[i].style.strokeDashoffset = length[i];
    path[i].getBoundingClientRect();
    //console.log(path[i].getBoundingClientRect());
    path[i].style.transition = path[i].style.WebkitTransition = 'stroke-dashoffset 2s ease-in-out';
    path[i].style.strokeDashoffset = '0';
 }
});
// var current_frame, total_frames, path, length, handle;

// var init = function() {
//   current_frame = 0;
//   total_frames = 120;
//   path = new Array([]);
//   length = new Array([]);
//   for(var i = 0; i < 16; i++) {
//     path[i] = document.getElementById('path'+i);
//     l = path[i].getTotalLength();
//     length[i] = l;
//     path[i].style.strokeDasharray = l + ' ' + l;
//     path[i].style.strokeDashoffset = l;
//   }
//   handle = 0;
// };

// var draw = function() {
//   var progress = current_frame/total_frames;
//   if (progress > 1) {
//     window.cancelAnimationFrame(handle);
//   } else {
//     current_frame++;
//     for(var j = 0; j < path.length; j++){
//       path[j].style.strokeDashoffset = Math.floor(length[j] * (1 - progress));
//     }
//     handle = window.requestAnimationFrame(draw);
//   }
// };

// init();
// draw();