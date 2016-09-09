$(document).ready(function() {

  // Returns height of browser viewport
  $(window).on('resize.windowscreen', function() {
    $('.windowscreen').height($(this).height());
  });

  $(window).trigger('resize.windowscreen');

});
