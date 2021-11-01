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
                    console.log("Non-RDS(Linear) Topology");
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
            str = 'Unavailable format.<br>Example: nmap [System]';
        }
        else if (tokens.length == 3 && tokens[1] == "-sL" && tokens[2]=='all')
        {
            var sys_list = checkSys.slice().map(Number);
            sys_list.sort(function(a, b){return a-b});
            var cnt = 0;
            str = "<br>Systems you can hack are : "
            for(var k in sys_list){
                if(sys_list[k]!=-1)
                {
                    cnt++;
                    str = str+" System"+sys_list[k]+",";
                }
            }
            if(cnt==0) str = "No further systems.<br>"
        }
        else {
            var token = dirname.substring(0,6);
            var nmapSysNo = dirname.substring(6);

            if (stage != 0 ){
                if(token=="System" && arrContains(allSys,nmapSysNo)){
                    if(arrContains(allSys,nmapSysNo)) {
                        next=1;
                        var conf = (arrContains(honeySys,nmapSysNo)) ? fakeConf : realConf;

                        // var port1type = (arrContains(hpPorts,conf[nmapSysNo]["ports"][0])) ? 'easy to attack' : 'difficult to attack';
                        // var port2type = (arrContains(hpPorts,conf[nmapSysNo]["ports"][1])) ? 'easy to attack' : 'difficult to attack';
                        // var port3type = (arrContains(hpPorts,conf[nmapSysNo]["ports"][2])) ? 'easy to attack' : 'difficult to attack';
                        // var port4type = (arrContains(hpPorts,conf[nmapSysNo]["ports"][3])) ? 'easy to attack' : 'difficult to attack';

                        sessionStorage['next']=next;

                        var port1type = '';
                        var port2type = '';
                        var port3type = '';
                        var port4type = '';

                        // str = '<br>Starting Nmap 6.47 ( http://nmap.org ) <br>Nmap scan report for '+ dirname +' <br>Host is up (0.000011s latency).<br>Not shown: 996 closed ports<br><br><table cellpadding="2" style="background-color: rgb(116,152,158)"><tr><th>PORT</th><th>STATE</th><th>SERVICE</th><th>Vulnerabilities</th><th>EASY/DIFFICULT TO ATTACK</th></tr><tr><td>'
                        str = '<br>Starting Nmap 6.47 ( http://nmap.org ) <br>Nmap scan report for '+ dirname +' <br>Host is up (0.000011s latency).<br>Not shown: 996 closed ports<br><br><table cellpadding="10" style="background-color: rgb(116,152,158)"><tr><th>PORT</th><th>STATE</th><th>SERVICE</th><th>VULNERABILITIES</th></tr><tbody><tr><td style="text-align:center;">'


                        // str = '<br>Starting Nmap 6.47 ( http://nmap.org ) <br>Nmap scan report for '+ dirname +' <br>Host is up (0.000011s latency).<br>Not shown: 996 closed ports<br><br><table cellpadding="2" style="background-color: rgb(116,152,158)"><tr><th>PORT</th><th>STATE</th><th>SERVICE</th><th>Vulnerabilities</th><th>EASY/DIFFICULT TO ATTACK</th></tr><tr><td>'
                        +conf[nmapSysNo]["ports"][0]
                        +'</td><td style="text-align:center;">open</td><td style="text-align:center;">'
                        +serviceForPort[conf[nmapSysNo]["ports"][0]]
                        +'</td><td style="text-align:center;">'+ conf[nmapSysNo]["exploit"][0]
                        +'</td><td>'+ port1type
                        +'</td></tr><tr><td style="text-align:center;">'
                        +conf[nmapSysNo]["ports"][1]
                        +'</td><td style="text-align:center;">open</td><td style="text-align:center;">'
                        +serviceForPort[conf[nmapSysNo]["ports"][1]]
                        +'</td><td style="text-align:center;">'+ conf[nmapSysNo]["exploit"][1]
                        +'</td><td>'+ port2type
                        +'</td></tr><tr><td style="text-align:center;">'
                        +conf[nmapSysNo]["ports"][2]
                        +'</td><td style="text-align:center;">open</td><td style="text-align:center;">'
                        +serviceForPort[conf[nmapSysNo]["ports"][2]]
                        +'</td><td style="text-align:center;">'+ conf[nmapSysNo]["exploit"][2]
                        +'</td><td>'+ port3type
                        +'</td></tr><tr><td style="text-align:center;">'
                        +conf[nmapSysNo]["ports"][3]
                        +'</td><td style="text-align:center;">open</td><td style="text-align:center;">'
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
                str = "can't follow this step";
        }
        return str;
    },

    'get_exploited_nodes' : function (tokens)
    {
        var sys_list = checkSys.slice().map(Number);
        var cnt = 0;
        var str = "<br>Systems you have hacked till now are : "
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

    'use_exploit': function (tokens) {
        var x = Math.random();
        var abc = tokens[2].substring(6);
        if((x <= 0.9 && arrContains(honeySys,abc)) || (x > 0.9 && !arrContains(honeySys,abc)))
        {
            var exploit_name = tokens[1];
            var target = tokens[2];
            stage=sessionStorage['stag'];
            next =sessionStorage['next'];
            var str = "";
            if (stage>0 && next==1 ){
                if (tokens.length != 3 || exploit_name == '') {

                    str = 'Unavailable format.<br>Example: use exploit_name System1/System2/../SystemN';
                }
                else if (arrContains(exploitForPort,exploit_name)) {
                    var token = target.substring(0,6);
                    var nmapSysNo = target.substring(6);
                    var mark_flag = checkElem(nmapSysNo);

                    if(arrContains(allSys,nmapSysNo) && mark_flag){
                        sessionStorage['sys_attacked']=nmapSysNo;
                        var sys_attacked=nmapSysNo;
                        var conf = (arrContains(honeySys,nmapSysNo)) ? fakeConf : realConf;
                        if(arrContains(conf[sys_attacked]["exploit"],exploit_name))
                        {
                            stage++;
                            markElem(nmapSysNo);
                            if(mark_flag) nSysRemain--;
                            sessionStorage['stag'] = stage;
                            $.ajax({
                                type: 'POST',
                                url: 'input_exploit',
                                data: "temp1=" + exploit_name + "&temp2=" + target + "&r=" + honeySys,
                                success: function(data){
                                    console.log('exploit data logged-1'+data);
                                }
                            });
                            //str = 'Success: x = ' + x + '. Honeypots: ' + honeySys + '. RealSys: '+ userSys;
                            str = 'You have gained entry into the system. Now use ls to see the files in the system<br><br>';
                        } else  {
                            str = 'use the vulnerability according to the system';
                        }
                    } else if(arrContains(allSys,nmapSysNo) && !mark_flag) {
                        str = "target already exploited";
                    } else {
                        str = "target not specified correctly";
                    }
                } else {
                    str = 'Specify the exploit correctly';
                    }
            } else {
                str = "can't follow this step";
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
            sessionStorage['stag']=stage;
            var fNames = "";
            for(var i in allFiles)
            {
                fNames = fNames +  "<br>" + allFiles[i] ;
            }
            fNames = fNames + "<br><br>Now use \'scp\' to transfer files<br>Example: scp \'file_name\' 'your_ip' <br><br>";
            str = fNames;
        }
        else
            str = "can't follow this step";

        return str;
        },

     'scp': function (tokens) {
        var l = tokens.length;
        var str = "";
        stage = sessionStorage['stag'];
        if (l != 3)
            str = 'Unavailable format.<br>Example: scp file_name your_ip_address<br><br>';
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
                str = "can't follow this step";
            }
        }

        return str;
    },
    'exit': function (tokens) {
        $.ajax({
            type: 'POST',
            url: 'input_command',
            data: "input=" + tokens.join(' ') + "&output=" + "User exited the game",
            success: function(data){
                console.log('logged exit');
                window.location.href = "score";
            }
        });
    }
};

    for (var j in command_directory) {
        $.register_command(j, command_directory[j]);
    }
});
