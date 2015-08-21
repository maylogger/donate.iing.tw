$('#countdown-timer').countdown('2015/08/24 12:00').on('update.countdown', function(event) {
  var totalHours = event.offset.totalDays * 24 + event.offset.hours;
  var $this = $(this).html(event.strftime(''
    + '<span class="number">' + totalHours + '</span><span class="timer-unit">時</span>'
    + '<span class="number">%M</span><span class="timer-unit">分</span>'
    + '<span class="number">%S</span><span class="timer-unit">秒</span>'));
}).on('finish.countdown', function(event){
  $(this).html('<div class="finish">活動開始！</div>');
});