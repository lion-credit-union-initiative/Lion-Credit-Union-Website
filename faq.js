$(document).ready(function() {
  $('.question').click(function() {
    var elem = $(this).next(".answer");
    if (elem.css('display') == 'none') {
      $(this).find('span').removeClass('fa-caret-down');
      $(this).find('span').addClass('fa-caret-up');
    }
    else {
      $(this).find('span').removeClass('fa-caret-up');
      $(this).find('span').addClass('fa-caret-down');
    }

    elem.stop(true, true).slideToggle();
  });
});
