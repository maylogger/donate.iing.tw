(function() {
  var $canvas, $container;

  $canvas = document.getElementById('canvas');

  $container = document.querySelectorAll('.hero')[0];

  new Canvas({
    canvas: $canvas,
    container: $container
  });

}).call(this);