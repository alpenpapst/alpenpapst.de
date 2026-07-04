$(function() {
  $('.zoom').each(function() {
    var link = $(this);
    if (link.is('.video-zoom')) {
      var options = {iframe: true, innerHeight: '80%', innerWidth: '80%'};
    } else {
      var options = {maxWidth: '80%', maxHeight: '80%'};
    }
    options.fixed = true;
    link.colorbox(options);
  });
});