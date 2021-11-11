$(document).ready(function () {

    var next=0;
    var nSysRemain = 0;
    var userSys = [];
    var honeySys = [];
    var allSys = [];
    var checkSys = [];
    var allFiles = [];
    var realFiles = [];
    var fakeFiles = [];
    var file;
    var stage = sessionStorage['stag'];
    var gn=0;
    var hpPorts=['21/tcp','25/tcp','80/tcp','111/tcp','135/tcp'];

    function checkElem(elem)
	{
        for(var k in checkSys){
            if(checkSys[k]==elem)
            {
                return true;
            }
        }
        return false;
    }


    function markElem(elem)
	{
        for(var k in checkSys){
            if(checkSys[k]==elem)
            {
                console.log(k);
                checkSys[k] = -1;
                console.log(checkSys);
                return true;
            }
        }
        return false;
    }

    getGameNo();
	function getGameNo() {
        $.ajax({
            type: "post",
            url: "game_no",
            data: "getNo",
            success: function (data) {
                gn=Number(data);
                userSys = sysData[gn]["real"];
                allFiles = fileArray;
                realFiles = sysData[gn]["real_files"];
                fakeFiles = sysData[gn]["fake_files"];
                allSys = sysData[gn]["all"];
                nSysRemain = allSys.length;
                checkSys = allSys.slice();
                honeySys = sysData[gn]["honeypots"];

				if((gn==1)){
                    console.log("RDS Topology");
                    }
				// else{
                //         honeySys=[];
                //         userSys=allSys;
                //     }
            }
        });
    }

    var command_directory = {
    'nmap': function (tokens) {
        //tokens.length;
        var stage = sessionStorage['stag'];
        var dirname = tokens[1];
        var str = "";
        if (tokens.length == 1 || dirname == '') {
            str = 'Incorrect syntax found.<br>Example: nmap System#';
        }
        else if (tokens.length == 3 && tokens[1] == "-sL" && tokens[2]=='all')
        {
            var str = "";
            var cursys = Number(sessionStorage['curr_sys']);
            str = 'Systems adjacent to the current system are : ' + g.printSystems(cursys) + "<br><br>";
            return str;
        }
        else{
            var token = dirname.substring(0,6);
            var nmapSysNo = dirname.substring(6);
            var csys = Number(sessionStorage['curr_sys']);
            var edges = g.getEdges(csys);
            if (stage != 0 ){
                if(token=="System" && arrContains(edges,nmapSysNo)){
                    if(arrContains(edges,nmapSysNo)) {
                        next=1;
                        sessionStorage['next']=next;
                        var conf = (arrContains(honeySys,nmapSysNo)) ? fakeConf : realConf;
                        // var port1type = (arrContains(hpPorts,conf[nmapSysNo]["ports"][0])) ? 'easy to attack' : 'difficult to attack';
                        // var port2type = (arrContains(hpPorts,conf[nmapSysNo]["ports"][1])) ? 'easy to attack' : 'difficult to attack';
                        // var port3type = (arrContains(hpPorts,conf[nmapSysNo]["ports"][2])) ? 'easy to attack' : 'difficult to attack';
                        // var port4type = (arrContains(hpPorts,conf[nmapSysNo]["ports"][3])) ? 'easy to attack' : 'difficult to attack';

                        var port1type = '';
                        var port2type = '';
                        var port3type = '';
                        var port4type = '';

                        // str = '<br>Starting Nmap 6.47 ( http://nmap.org ) <br>Nmap scan report for '+ dirname +' <br>Host is up (0.000011s latency).<br>Not shown: 996 closed ports<br><br><table cellpadding="2" style="background-color: rgb(116,152,158)"><tr><th>PORT</th><th>STATE</th><th>SERVICE</th><th>Vulnerabilities</th><th>EASY/DIFFICULT TO ATTACK</th></tr><tr><td>'
                        str = '<br>Starting Nmap 6.47 ( http://nmap.org ) <br>Nmap scan report for '+ dirname +' <br>Host is up (0.000011s latency).<br>Not shown: 996 closed ports<br><br><table cellpadding="10" style="background-color: rgb(116,152,158)"><tr><th>PORT</th><th>STATE</th><th>SERVICE</th><th>VULNERABILITIES</th></tr><tbody><tr><td style="text-align:center;">'

                        +conf[nmapSysNo]["ports"][0]
                        +'</td><td style="text-align:center;">open</td><td style="text-align:center;">'
                        +serviceForPort[conf[nmapSysNo]["ports"][0]]
                        +'</td><td style="text-align:center;">'+ conf[nmapSysNo]["exploit"][0]
                        +'</td><td>'+ port1type
                        +'</td></tr><tr><td style="text-align:center;">'
                        +conf[nmapSysNo]["ports"][1]
                        +'</td><td style="text-align:center;"> open </td><td style="text-align:center;">'
                        +serviceForPort[conf[nmapSysNo]["ports"][1]]
                        +'</td><td style="text-align:center;">'+ conf[nmapSysNo]["exploit"][1]
                        +'</td><td>'+ port2type
                        +'</td></tr><tr><td style="text-align:center;">'
                        +conf[nmapSysNo]["ports"][2]
                        +'</td><td style="text-align:center;"> open </td><td style="text-align:center;">'
                        +serviceForPort[conf[nmapSysNo]["ports"][2]]
                        +'</td><td style="text-align:center;">'+ conf[nmapSysNo]["exploit"][2]
                        +'</td><td>'+ port3type
                        +'</td></tr><tr><td style="text-align:center;">'
                        +conf[nmapSysNo]["ports"][3]
                        +'</td><td style="text-align:center;"> open </td><td style="text-align:center;">'
                        +serviceForPort[conf[nmapSysNo]["ports"][3]]
                        +'</td><td style="text-align:center;">'+ conf[nmapSysNo]["exploit"][3]
                        +'</td><td>'+ port4type
                        +'</td></tr></tbody><tfoot><tr><td>Device type: general purpose</td></tr><tr><td>Running: '
                        +conf[nmapSysNo]["OS"]+'</td></tr><tr><td>OS details: '
                        +conf[nmapSysNo]["OS"]+'</td></tr></tfoot></table><tr>Nmap done: 1 IP address (1 host up) scanned in 0.32 seconds';

                        str = str + '<br>Now you can probe another system... or you can exploit the above listed vulnerabilities.<br>Use following command: use_exploit Vul-name System-name<br>';
                    }
                } else
                    str = "target not specified correctly";
            } else
                str = "Can't follow this step. Start the game using <b>start</b> command.";
        }
        return str;
    },


    'use_exploit': function (tokens)
    {
        var x = Math.random();
      var abc = tokens[2].substring(6);
      if((x <0.9  && arrContains(honeySys,abc)) || (x >= 0.9 && !arrContains(honeySys,abc)))
      {

        var exploit_name = tokens[1];
        var target = tokens[2];
        stage=sessionStorage['stag'];
        next =sessionStorage['next'];
        var str = "";
        if (stage>0 && next==1 )
        {
          if (tokens.length != 3 || exploit_name == '')
          {
            str = 'Unavailable format.<br>Example: use exploit_name System1/System2/../SystemN';
          }
          else if (arrContains(exploitForPort,exploit_name))
          {
            var token = target.substring(0,6);
            var nmapSysNo = target.substring(6);
            var csys = Number(sessionStorage['curr_sys']);
            var edges = g.getEdges(csys);
            var mark_flag = checkElem(nmapSysNo);

            if(arrContains(edges,nmapSysNo) && mark_flag)
            {
              sessionStorage['sys_attacked']=nmapSysNo;
              var sys_attacked=nmapSysNo;
              var conf = (arrContains(honeySys,nmapSysNo)) ? fakeConf : realConf;
              if(arrContains(conf[sys_attacked]["exploit"],exploit_name))
              {
                stage++;
                markElem(nmapSysNo);
                if(mark_flag)
                {
                  nSysRemain--;
                }
                sessionStorage['stag']=stage;
                $.ajax({
                          type: 'POST',
                          url: 'input_exploit',
                          data: "temp1=" + exploit_name + "&temp2=" + target + "&r=" + honeySys,
                          success: function(data)
                          {
                            console.log('exploit data logged-1'+data);
                          }
                });
                //Uncomment the line below to check the values of x and honeypots;
                //str = 'Success: x = ' + x + '. Honeypots: ' + honeySys + '. RealSys: '+ userSys;
                str = 'You have gained entry into the system. Now use <b>ls</b> to see the files in the system<br><br>';
              }
              else
              {
                str = 'use the vulnerability according to the system';
              }
            }
            else if(arrContains(edges,nmapSysNo) && !mark_flag)
            {
              str = "target already exploited";
            }
            else
            {
              str = "target not specified correctly";
            }
          }
          else
          {
            str = 'Specify the exploit correctly';
          }
        }
        else
        {
           str = "Can't follow this step. Start the game using <b>start</b> command.";
        }
        return str;
      }
      else
      {
        var str = "";
        //str = 'Failed: x = ' + x + '. Honeypots: ' + honeySys + '. RealSys: ' + userSys;
        str = 'The use_exploit command failed while exploiting the vulnerability. You may try exploiting vulnerabilities again.';
        return str;
      }
    },

    'ls': function (tokens) {
        var str = "";
        stage = sessionStorage['stag'];
        if (stage>=2 ){
            stage++;
            sessionStorage['stag'] = stage;
            var fNames = "";
            for(var i in allFiles)
            {
                fNames = fNames +  "<br>" + allFiles[i] ;
            }
            fNames = fNames + "<br><br>Now use \'scp\' to transfer files<br>Example: scp \'file_name\' 172.22.31.31 <br><br>";
            str = fNames;
        }
        else
            str = "Can't follow this step. Start the game using <b>start</b> command.";

        return str;
        },

    'scp': function (tokens) {
        var l = tokens.length;
        var str = "";
        stage = sessionStorage['stag'];
        if (l != 3)
            str = 'Command syntax incorrect.<br>Example: scp file_name 172.22.31.31<br><br>';
        else {
            if (stage >= 3 ){
                var target=sessionStorage['sys_attacked'];
                var ip = tokens[2];
                file = tokens[1];
                if (ip == '172.22.31.31') {
                    //arrContains(allFiles,file)
                    if (file=="pin.txt") {
                        //stage++;
                        sessionStorage['stag']=1;
                        sessionStorage['next']=0;
                        next = 0;
                        sessionStorage['curr_sys'] = Number(target);

                       console.log('code running copy start');
                        $.ajax({
                            async: false,
                            type: "post",
                            url: "hacker_point",
                            data: "file=" + file + "&target=" + target + "&r=" + honeySys + "&fake=" + fakeFiles + "&action=addstage",
                            success: function (data) {
                                console.log('exploit logged '+data);
                                console.log('code running copy mid');
                                str=data;
                            }
                        });
                        console.log('code running copy finish');
                        //"You have succesfully copied the file to your system"
                        var cursys = Number(sessionStorage['curr_sys']);
                        // str = str + '<br> OR <br> you can exploit the following systems next : ' + g.printSystems(cursys);
                        str = str + '<br> you can exploit the following systems next :' + g.printSystems(cursys);

                    } else {
                        str = 'Wrong file name. Please try again.<br><br>';
                    }
                } else {
                    str = 'Please specify the ip address of your machine<br><br>';
                }
            } else {
                str = "Can't follow this step. Start the game using <b>start</b> command.";
            }
        }

        return str;
    },
    'get_exploited_nodes' : function (tokens)
    {
        var sys_list = checkSys.slice().map(Number);
        var cnt = 0;
        str = "<br>Systems you have hacked till now are : "
        for(var k in sys_list){
            if(sys_list[k]==-1)
            {
                cnt++;
                str = str+" System"+allSys[k]+",";
            }
        }
        if(cnt==0) str = "No systems exploited yet.<br>"
        return str;
    },
    'logout': function (tokens) {
        var target = Number(sessionStorage['curr_sys']);
        var str = "";
        sessionStorage['stag']=1;
        sessionStorage['next']=0;
        next = 0;
        var par = g.parentNode.get(target);
        if (par!=null)
        {
            sessionStorage['curr_sys'] = par;
            str = "You are now on System"+sessionStorage['curr_sys'] + '<br>Systems you can hack are : ' + g.printSystems(par);
        } else
            str = "You are on the root system" + '<br>Systems you can hack are : ' + g.printSystems(0);

        return str;
    },
    'exit': function (tokens) {
        str = "You can not exit the game untill remaining time finishes. Please keep hacking.";
        return str;
        // $.ajax({
        //     type: 'POST',
        //     url: 'input_command',
        //     data: "input=" + tokens.join(' ') + "&output=" + "User exited the game",
        //     success: function(data){
        //         console.log('logged exit');
        //         window.location.href = "score";
        //     }
        // });
    },
    'mohan': function(tokens){
        fetchData=myFunc();
        console.log(fetchData.id+"check")
        //return fetchData.id;
        return "done!";
    },
    'chat': function (tokens) {
        //str = $_SESSION['unique_id']; 
        //window.open("http://localhost/sample_rdsh/login.php"); 
        //window.open("http://localhost/sample_rdsh/login.php", "myWindow", 'width=400,height=400');
        if(tokens[1]=="-c"){
        document.getElementById("wterm-parent").style.width="97%";
        document.getElementById("float-right").style.visibility="hidden";
        document.getElementById("float-right").style.width="0%";
        str="Chat window has been closed";
        }
        else if(tokens[1]=="-o"){
            document.getElementById("wterm-parent").style.width="70%";
            document.getElementById("float-right").style.visibility="visible";
            document.getElementById("float-right").style.width="25%";
            str="Chat window has been opened";
        }
        else {
            str="Please provide valid chat arguments.";
        }
        return str; 
    }
};

    for (var j in command_directory) {
        $.register_command(j, command_directory[j]);
    }
});


function myFunc(){
    // var result;
    // fetch('https://jsonplaceholder.typicode.com/todos/1')
    // .then(response => response.json())
    // .then(json => {
    //     result=json;
    //     console.log(json)});

        var request = new XMLHttpRequest();
        request.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', false);  // `false` makes the request synchronous
        request.send(null);
        
        if (request.status === 200) {
          console.log(request.responseText);
          return JSON.parse(request.responseText);
        }
}