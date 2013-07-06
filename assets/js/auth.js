$(document).ready(function() {
  if ($.cookie('error')) {
    $('#error-alert').html($.cookie('error'))
    $.removeCookie('error');
  }
  if ($.cookie('info')) {
    $('#info-alert').html($.cookie('info'))
    $.removeCookie('info');
  }
});