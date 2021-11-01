$( document ).ready( function() {
 
  var totalSystems = 40;
  $('#wterm').wterm({
    PS1: '>', WIDTH: '100%', HEIGHT: '100%', WELCOME_MESSAGE: 'Welcome Hacker&nbsp&nbsp&nbsp&nbspYour IP: 172.22.31.31'
    +'<br>========================================'
    +'<br>Your aim for the game is to attack any one of the present systems, gain entry into the attacked system, and steal the credit card file "pin.txt" from the attacked system. If you successfully steal the pin.txt file, then you may gain points.'
    +'<br><br>Type "start" to begin the game'
    +'<br>Systems you can hack are :  "System1","System2" . . . . . '+'"System'+totalSystems+'"'
    +'<br> You may type "help" anytime on the prompt to learn about different commands you can run.'
    +'<br>-----------------------------------------------------------------------------<br>',AUTOCOMPLETE:false });
  });

  var stag=0;
  $.ajax({
    type: 'post',
    url: 'game_no',
    data: 'gameNo',
    success: function(data)
    {
      stag = data;
    }
  });
  sessionStorage['stag']=stag;

  var command_directory = {
    'start': function( tokens ) {
      if(stag == 0)
      {
        stag++;
        sessionStorage['stag']=stag;
        return '<h2><br>----------------------Demo Mode------------------</h2><br>Welcome to the demo mode in HackIt. In the demo mode, you can practice running different commands. Your score will not change in the demo mode. The real game will only start after the demo mode ends. The demo mode is normally 5-minutes long. However, you can exit the demo mode to play the real game by typing exit followed by start. <br><br>Probe Phase<br>-----------<br>Welcome to the Probe Phase. Probe means that you try to collect information on whether a system has services that could be easily exploited. To probe a system, you need to run the nmap command on each system once.<br>Nmap is a network utility is designed to check for open ports, Operating Systems running, and the different services running on a network connected system. In this game, the nmap utility will also provide the list of vulnerabilities available on the corresponding system and whether the vulnerability is easy to exploit or difficult to exploit.<br><br>The format of nmap is: nmap [system-name].<br>Example: nmap System1</div>';
      }
      else
      {
        stag++;
        sessionStorage['stag']=stag;
        return '<h2><br>----------------------Real Mode------------------</h2><br>Welcome to the real mode in HackIt. You have 20-minutes to probe and attack as many servers as you can and maximise your score. <br><br>Probe Phase<br>-----------<br>Welcome to the Probe Phase. Probe means that you try to collect information on whether a system has services that could be easily exploited. To probe a system, you need to run the nmap command on each system once.<br>Nmap is a network utility is designed to check for open ports, Operating Systems running, and the different services running on a network connected system. In this game, the nmap utility will also provide the list of vulnerabilities available on the corresponding system and whether the vulnerability is easy to exploit or difficult to exploit.<br><br>The format of nmap is: nmap [system-name].<br>Example: nmap System1</div>';
      }
    },
    'r': function( tokens ) {
      window.location.reload();
    },

  };
  // var command_directory = {               
  // 'start': function( tokens ) {
  //   stag++;
  //   sessionStorage['stag']=stag;
  //   return '<br>Probe Phase<br>-----------------<br>Welcome to the Probe Phase. Probe means that you try to collect information on whether a system has services that could be easily exploited. To probe a system, you need to run the nmap command on each system once.<br>Nmap is a network utility is designed to check for open ports, Operating Systems running, and the different services running on a network connected system. In this game, the nmap utility will also provide the list of vulnerabilities available on the corresponding system and whether the vulnerability is easy to exploit or difficult to exploit.<br><br>The format of nmap is: nmap [system-name].<br>Example: nmap System1</div>';
  // },
  // 'r': function( tokens ) {
  //   window.location.reload(); 
  // },

  // };

  for( var j in command_directory ) {
  $.register_command( j, command_directory[j] );
  }

  $.register_command( 'help', function() {
  return '<table cellpadding="5" style="background-color: rgb(116, 152, 158);" WIDTH="60%">\
      <tr><td>start</td><td>Start the Game</td></tr>\
      <tr><td>nmap</td><td>Scans the webserver to find the running services</td><td>nmap [system-name]</td><td>nmap System1</td></tr>\
      <tr><td>nmap -sL all</td><td>Lists all the servers that remain unexploited.</td></tr>\
      <tr><td>use_exploit</td><td>Exploits the vulnerability to access the System</td><td>use_exploit [vulnerability-name] [system-name]</td><td>use_exploit brute_force System1</td></tr>\
      <tr><td>get_exploited_nodes</td><td>Prints all the nodes you have exploited</td></tr>\
      <tr><td>exit</td><td>Exit the Game</td></tr></table><br><br>'
  });
