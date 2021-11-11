<!DOCTYPE html>
<html>
<head>

<title>HackIt Chat</title>
<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

<!-- jQuery library -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

<!-- Latest compiled JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <link href='https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600,700,300' rel='stylesheet' type='text/css'>

<script>try{Typekit.load({ async: true });}catch(e){}</script>
<link rel='stylesheet prefetch' href='https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css'>
<link rel='stylesheet prefetch' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.2/css/font-awesome.min.css'>
<link rel="stylesheet" type="text/css" href="<?php echo base_url().'css/chat.css'?>">
<style class="cp-pen-styles">
</style></head><body>


<div id="frame">
	<div class="content">
		<div class="contact-profile">
			<p style="margin-left: 40%;">HackIt Chat</p>
			
		</div>
		<div class="messages" id="chatBox">
			<ul>
				
			</ul>
		</div>
		<div class="message-input">
			<div class="wrap">
			<input type="text" placeholder="Write your message..." />
			<button class="submit"><i class="fa fa-paper-plane" aria-hidden="true"></i></button>
			</div>
		</div>
	</div>
</div>


<script>

  $(".messages").animate({ scrollTop: $(document).height() }, "fast");
  var user_id;

  function newMessage() {
    
    message = $(".message-input input").val();
    if($.trim(message) == '') {
      return false;
    }
    writeUserData(message);
  };

  $('.submit').click(function() {
    newMessage();
  });

  $(window).on('keydown', function(e) {

    if (e.which == 13) {
      newMessage();
      return false;
    }
  });
</script>

<!-- Firebase -->
<script src="https://www.gstatic.com/firebasejs/4.13.0/firebase.js"></script>
<script>
			// Initialize Firebase
			var config = {
			apiKey: "AIzaSyDGYWwfyupoSn7b94fybaboQcT2ue35gcg",
			authDomain: "hackit-chat.firebaseapp.com",
			databaseURL: "https://hackit-chat.firebaseio.com",
			projectId: "hackit-chat",
			storageBucket: "hackit-chat.appspot.com",
			messagingSenderId: "797847759634"
		};
		firebase.initializeApp(config);
    var user = firebase.auth().signInAnonymously();

    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        var isAnonymous = user.isAnonymous;
        user_id = user.uid;
      } else {
        // User is signed out.
      }
    });
</script>

<script>
(function () {
  var original = "HackIt Chat";
  var timeout;

  window.flashTitle = function (newMsg, howManyTimes) {
      function step() {
          document.title = (document.title == original) ? newMsg : original;

          if (--howManyTimes > 0) {
              timeout = setTimeout(step, 1000);
          };
      };

      howManyTimes = parseInt(howManyTimes);

      if (isNaN(howManyTimes)) {
          howManyTimes = 5;
      };

      cancelFlashTitle(timeout);
      step();
  };

  window.cancelFlashTitle = function () {
      clearTimeout(timeout);
      document.title = original;
  };
}());
  // get firebase database reference...

  var db_ref = firebase.database().ref('/');

  db_ref.on('child_added', function (data) {
    var type;
    if(data.val().user_id == user_id){
      type="sent";
    }
    else{
      type="replies";
      $(document).ready(function() {
        var audio = new Audio('<?php echo base_url()."hacker/"?>notif.mp3');
        audio.play(); 
        flashTitle("New Message", 5);
      });
    }
    $('<li class="'+type+'"><p>' + data.val().message + '</p></li>').appendTo($('.messages ul'));
    $('.message-input input').val(null);
    $('.contact.active .preview').html('<span>You: </span>' + data.val().message);

      $(".messages").animate({ scrollTop: $(".messages")[0].scrollHeight }, 0);      
  });

  function writeUserData(message) {

			var date = new Date();
			//var timestamp = date.getTime();
      db_ref.push({
          user_id: user_id,
          message: message,
					timestamp: date.toLocaleString()
      });
  }

</script>



</body></html>