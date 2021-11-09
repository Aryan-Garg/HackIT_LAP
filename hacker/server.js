$( document ).ready( function() {
  var curr_sys = 0;
  sessionStorage['curr_sys'] = curr_sys;

  var totalSystems = g.getEdges(curr_sys).length;
  $('#wterm').wterm({
    PS1: '>', WIDTH: '100%', HEIGHT: '100%', WELCOME_MESSAGE: 'Welcome Hacker &nbsp&nbsp&nbsp&nbsp Your IP: 172.22.31.31'
    +'<br>========================================='
    +'<br>Your aim for the game is to attack any one of the present systems, gain entry into the attacked system, and steal the credit card file "pin.txt" from the attacked system. If you successfully steal the pin.txt file, then you may gain points.'
    +'<br><br>Type "start" to begin the game'
    +'<br>Systems you can hack are : ' + g.printSystems(curr_sys)//"System1","System2" . . . . . '+'"System'+totalSystems
    +'<br> You may type "help" anytime on the prompt to learn about different commands you can run.'
    +'<br>-----------------------------------------------------------------------------<br>',AUTOCOMPLETE:false });
  });

  var stag = 0;
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
        return '<h2><br>----------------------Demo Mode------------------</h2><br>Welcome to the Demo Mode in HackIt. In the demo mode, you can practice running different commands. You will <b>NOT</b> be scored in the Demo Mode. The Real Mode of the game will only start after the Demo Mode ends. The Demo Mode is 2.5 minutes long which will exit automatically and Real Mode will begin. You can practise the flow of game in the demo mode. <br><br>Probe Phase<br>-----------<br>Welcome to the Probe Phase. Probe means that you try to collect information on whether a system has services that could be easily exploited. To probe a system, you need to run the nmap command on each system once.<br>Nmap is a network utility is designed to check for open ports, Operating Systems running, and the different services running on a network connected system. In this game, the nmap utility will also provide the list of vulnerabilities available on the corresponding system and whether the vulnerability is easy to exploit or difficult to exploit.<br><br>The format of nmap is: nmap [system-name].<br>Example: nmap System1</div>';
      }
      else
      {
        stag++;
        sessionStorage['stag']=stag;
        return '<h2><br>----------------------Real Mode------------------</h2><br>Welcome to the Real Mode in HackIt. You have 10-minutes to probe and attack as many servers as you can and maximise your score. <br><br>Probe Phase<br>-----------<br>Welcome to the Probe Phase. Probe means that you try to collect information on whether a system has services that could be easily exploited. To probe a system, you need to run the nmap command on each system once.<br>Nmap is a network utility is designed to check for open ports, Operating Systems running, and the different services running on a network connected system. In this game, the nmap utility will also provide the list of vulnerabilities available on the corresponding system and whether the vulnerability is easy to exploit or difficult to exploit.<br><br>The format of nmap is: nmap [system-name].<br>Example: nmap System1</div>';
      }
    },
    'r': function( tokens ) {
      window.location.reload();
    },

  };

  for( var j in command_directory ) {
    $.register_command( j, command_directory[j] );
  }

  $.register_command( 'help', function() {
  return '<table cellpadding="5" style="background-color: rgb(116, 152, 158);" WIDTH="60%">\
          <tr><td>start</td><td>Start the Game</td></tr>\
          <tr><td>nmap</td><td>Scans the webserver to find the running services</td><td>nmap [system-name]</td><td>nmap System1</td></tr>\
          <tr><td>nmap -sL all</td><td>Prints all the adjacent servers.</td></tr>\
          <tr><td>get_exploited_nodes</td><td>Prints all the nodes you have exploited</td></tr>\
          <tr><td>logout</td><td>Logs out from current node and switches to previous node</td></tr>\
          <tr><td>use_exploit</td><td>Exploits the vulnerability to access the System</td><td>use_exploit [vulnerability-name] [system-name]</td><td>use_exploit brute_force System1</td></tr>\
          </table><br><br>'
  });
