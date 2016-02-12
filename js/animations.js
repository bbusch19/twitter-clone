$(document).ready(function() {

  $('#tweet-controls').hide();


  $('textarea').on('click', function() {
    $(this).animate({height: '5em'}, 500)
    $('#tweet-controls').fadeIn();
  })


  var charNum = 140;
  $('textarea').on('keyup', function(e) {
     charNum--;
     $('#char-count').text(charNum);

    if (charNum <= 10) {
        $('#char-count').css({color: 'red'});
   } else if (charNum <= 0) {
        $('#tweet-submit').hide();
   }
  })




});
