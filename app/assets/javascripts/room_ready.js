var roomReady = (function() {

  $("form").submit(function() {
    event.preventDefault();
    App.chat.speak($('#message').val());
    $('#message').val('');
  });

});

