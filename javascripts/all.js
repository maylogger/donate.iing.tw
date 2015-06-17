(function() {
  var $canvas, $container;

  $canvas = document.getElementById('canvas');

  $container = document.querySelectorAll('.hero')[0];

  new Canvas({
    canvas: $canvas,
    container: $container
  });

}).call(this);

if(Modernizr.csstransitions && !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {

  var doc = $(document);
  var body = $('body');
  var page = $('.page');
  var desktop_breakpoint = 960;
  body.addClass('scale-content');

  function push_page(){
    push = 'translate(0,'+ (150 - $(window).height() + 'px') +')';
    page.css({
      "-webkit-transform": push,
      "transform": push
    });
    body.addClass('is-scaled');
  }
  function reset_page(){
    page.css({
      "-webkit-transform": 'translate(0,0)',
      "transform": 'translate(0,0)'
    });
    body.removeClass('is-scaled');
  }

  $(window).on('scroll', function(){
    var scrolling = doc.scrollTop();
    var touch_bottom = body.height() - $(window).height() - $('.site-info').outerHeight();
    if ( scrolling >= touch_bottom ) {
      var viewport_width = $(window).width();
      if (viewport_width >= desktop_breakpoint) {
        push_page();
      }
    } else {
      reset_page();
    }
  });

  $(window).resize(function() {
    var scrolling = doc.scrollTop();
    var touch_bottom = body.height() - $(window).height() - $('.site-info').outerHeight();
    var viewport_width = $(window).width();
    if (viewport_width < desktop_breakpoint ) {
      body.removeClass('scale-content');
      reset_page();
    } else if (viewport_width >= desktop_breakpoint && scrolling < touch_bottom) {
      body.addClass('scale-content');
      reset_page();
    } else {
      body.addClass('scale-content');
      push_page();
      $("html, body").scrollTop(doc.height());
    }
  });

}

$("a[href='#top']").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});
