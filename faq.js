$(document).ready(function() {
  $('.question').click(function() {
    $(this).next().stop(true, true).slideToggle();
  });
});
