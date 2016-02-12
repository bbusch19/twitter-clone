$(document).ready(function() {

  $('#tweet-controls').hide();

//this grows and fades in the tweet-controls

  $('textarea').on('focus', function() {
    $(this).animate({height: '5em'}, 500)
    $(this).siblings('#tweet-controls').fadeIn();
  })

//this shrinks the tweet boc and hides the tweet-controls

  $('textarea').on('blur', function() {
    $(this).animate({height: '2.5em'}, 500)
    $('#tweet-controls').fadeOut();
  })

  var charNum = 140;

  //this function controlls the character count of the text box

  $('textarea').on('keyup', function() {
     charNum = 140 - $('textarea.tweet-compose').val().length;
     $('#char-count').text(charNum);

     if (charNum <= 10) {
        $('#char-count').css({color: 'red'});

   }
      else if (charNum > 10) {
        $('#char-count').css({color: '#999'});
    }
  })

  //this makes the tweet button disappear if the number of characters > 140

  $('textarea').on('keyup', function() {
     charNum = 140 - $('textarea.tweet-compose').val().length;
     $('#char-count').text(charNum);

     if (charNum < 0) {
       $('#tweet-submit').css({display: 'none'});
     }
      else {
        $('#tweet-submit').css({display: 'inline-block'});
      }
})


$('#tweet-submit').on('click', function() {
  $('#stream').prepend('<div class="tweet"><div class="content"><img class="avatar" src="img/alagoon.jpg" /><strong class="fullname">Harry Potter</strong><span class="username">@hPotter</span><p class="tweet-text">' + $('textarea.tweet-compose').val() + '</p><div class="tweet-actions"><ul><li><span class="icon action-reply"></span> Reply</li><li><span class="icon action-retweet"></span> Retweet</li><li><span class="icon action-favorite"></span> Favorite</li><li><span class="icon action-more"></span> More</li></ul></div>');
})



});
