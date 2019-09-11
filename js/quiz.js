$(document).ready(function() {
  
  var content = $('.card-content');
  var contentLength = $('.card .card-content').length;
  var progress = 100 / contentLength;
  const initialProgress = progress;
  var currentItem = content.filter('.card__active');
  var steps = $('.card').filter('.steps');
  var inactive1 = $('.inactive-1');
  var inactive2 = $('.inactive-2');
  $('.step').animate({width: initialProgress + '%'});
  $('.button').click(function() {
      console.log(initialProgress)
      var nextItem = currentItem.next();
      var lastItem = content.last();
      var contentFirst = content.first();
      currentItem.removeClass('card__active');
      if(progress >= 100) {
        progress = initialProgress
      } else {
        progress = progress + initialProgress
      }   
      if (currentItem.is(lastItem)) {
          currentItem = contentFirst.addClass('card__active');
          currentItem.css({'right': '10%', 'opacity': '1'});
          $('.step').animate({width: progress + '%'});
          inactive1.animate({height: '8px', marginLeft:'20px', marginRight:'20px'}, 100);
          inactive2.animate({height: '8px', marginLeft:'10px', marginRight:'10px'}, 100);
        
      } else if (currentItem.is(contentFirst)) {
          currentItem.animate({opacity: 0}, 1000);
          currentItem = nextItem.addClass('card__active');
          $('.step').animate({width: progress + '%'});
          inactive2.animate({height: '0', marginLeft:'0px', marginRight:'0px'}, 100);
        
      } else {
          currentItem = nextItem.addClass('card__active');
          $('.step').animate({width: progress + '%'});
          inactive1.animate({height: '0', marginLeft:'0px', marginRight:'0px'}, 100);
      }
      console.log(progress)
  });

});