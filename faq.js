$(document).ready(function() {
  $('.question').click(function() {
    var elem = $(this).next();
    if (elem.css('display') == 'none') {
      $(this).find('span').removeClass('glyphicon-triangle-bottom');
      $(this).find('span').addClass('glyphicon-triangle-top');
    }
    else {
      $(this).find('span').removeClass('glyphicon-triangle-top');
      $(this).find('span').addClass('glyphicon-triangle-bottom');
    }

    elem.stop(true, true).slideToggle();
  });
});
