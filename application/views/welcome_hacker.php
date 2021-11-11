<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Hack it!</title>
<link rel="stylesheet" type="text/css" href="<?php echo base_url().'css/new.css'?>">
</head>
<body>
<div>
<br>
</div>

<div class="centered" style="position:relative; ">
	<a class="btn right" href='<?php echo base_url()."main/logout"?>'>Logout</a>
	<h1><p> <?php echo 'Welcome! '?></p></h1>



<p>This study consists of a hacking task, where you will be playing as a hacker. Hackers are people knowledgeable about computers and they use this knowledge to steal data and private information in networks and damage systems that are important for organizations. In this task, <b>your goal is to steal files called "pin.txt" containing credit-card pin numbers from different web-server computers in a network.</b></p>

<p>A web-server is a computer that enables customers on the Internet to interact with a website. Shoppers.com, an online retail website, has set up 40 different web-servers in their network. Your goal is to exploit as many web-servers as possible to steal as many pin.txt files as possible (these pin.txt files contain credit-card information and pin numbers). </b></p>


<p>To steal a pin.txt files from Shoppers.com, you may first probe different web-servers. Probing means that you try to collect information about the open ports, and the different services running on different web-servers. To find what web-servers are available to you to probe, you may first run the following command:</p>

</p> > nmap -sL all</p>

<p>The output of this command will show you the Systems (web-servers), which are available for probing to you. Now, to probe a particular web-server, you need to run the nmap command on the web-server as shown below:</p>

<p> >  nmap System1 <br/>(to probe a web-server named “System1”)</p>


<!-- <p> Nmap is a network utility which will show the open ports, operating system, and services running on the specified web-server. The nmap utility will also provide the list of vulnerabilities on the corresponding web-servers. <b>By evaluating the operating system, ports, and services, you can decide whether the probed system can be hacked or not.</b> Table 1 shows the operating system, ports, and services that are <i>easy to attack or difficult to attack </i>on different web-servers. Please use this table to identify web-servers that are easy to attack.</p> -->

<p> The output of the nmap command on a web-server system (e.g. System1) will also provide a list of vulnerabilities present on the corresponding ports and services. You can exploit these vulnerabilities to steal "pin.txt" files from web-servers. To exploit a vulnerability on a web-server, you need to execute the "use_exploit" command. The use_exploit command accepts two parameter: the vulnerability to be attacked and the target system name. For example, you may run the following command to exploit sql_injection vulnerability on System1: </p>

<!-- <style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;border-color:#ccc;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#ccc;color:#333;background-color:#fff;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#ccc;color:#333;background-color:#f0f0f0;}
.tg .tg-amwm{font-weight:bold;text-align:center;vertical-align:top}
.tg .tg-yw4l{vertical-align:top}
</style>
<table class="tg">
  <tr>
    <th class="tg-amwm">Easy to Attack</th>
    <th class="tg-amwm">Difficult to Attack</th>
  </tr>
  <tr>
    <td class="tg-yw4l"><b>Operating systems:</b> Windows Server 2003, Windows XP, HP-UX 11i, and Solaris</td>
    <td class="tg-yw4l"><b>Operating systems:</b> OpenBSD, Linux, Mac OS X, and Windows 8</td>
  </tr>
  <tr>
    <td class="tg-yw4l"><b>Services and ports:</b> 21/tcp - ftp, 25/tcp -smtp, 80/tcp - http, 111/tcp - rpcbind, and 135/tcp – msrpc</td>
    <td class="tg-yw4l"><b>Services and ports:</b> 22/tcp-ssh, 53/tcp-domain, 110/tcp-pop3, 139/tcp-netbios, <br>443/tcp-https, 445/tcp-microsoft-ds, 3306/tcp-mysql, 5900/tcp-vncc http, 6112/tcp-dtspc, and 8080/tcp-apache</td>
  </tr>
</table> -->

<!-- <p>Once you are satisfied with your probing of different web-servers, you may decide to attack any of the web-servers on the network that you prefer based upon the operating system, ports, and services running. A web-server could be attacked by the “use_exploit” command. The use_exploit command accepts two parameters: first the vulnerability to be attacked and second the target system. Please see an example below: -->
<br/><br/> > use_exploit sql_injection System1
<br/>
<br/>Where “sql-injection” is the vulnerability to be exploited and “System1” is the web-server where this vulnerability exists.
</p>

<!-- <p>Once you attack a system and gain access into it, you may view the filenames the web-server contains by using the “ls” command. This command lists the files currently on the file system of the machine you have broken into and could be executed in the following way: -->

<p> The success of the use_exploit command on a web-server depends upon whether the vulnerability present on the system web-server has been patched or not. Once the use_exploit command is executed, it may succeed and you may gain access into the system to steal pin.txt file. However, the use_exploit command may also fail sometimes to exploit the vulnerability. In such a situation, you may try exploiting the same vulnerability, try exploiting some other vulnerability on the web-server, or move to some other web-server to nmap and exploit. If the use_exploit command succeeds, you gain access into the web-server, and you may view the filenames the web-server contains by using the "ls" command. The ls command lists the files present on the web-server you have broken into it and it could be executed in the follopwing way: </p>

<br/><br/> > ls
<br/><br/> After the ls command, you can use the scp command to transfer the “pin.txt” file between your system and the remote web-server, which you have exploited. The scp command works in the following way:
<br><br/>> scp pin.txt 172.22.31.31
<br/><br/>Where, “pin.txt” is the credit-card pin file and “172.22.31.31” is your local machine’s IP address. Please note down this IP address (172.22.31.31) as you will have to use it again-and-again to copy pin.txt files from different web-servers. </p>

<p>Once you have copied the file from the exploited web-server, you will get feedback on your current performance in the task. The feedback will contain your current score and total cumulative score. Based upon this feedback, you may now exit the current web-server and probe, exploit and steal pin.txt files from other web-serve by executing the "logout" command in the following manner. </p>

<br/><br/> > logout
<br><br>

The flow of the task is also summarized in the following figure 1. You may use the "help" command any time in the task to list the available commands. 
<br>
<figure>
   <center>
  <img src="http://shashank.acslab.org/hackit/rdse/images/steps.png" width="1000" height="200">
  <figcaption>Figure 1: Steps involved in the task.</figcaption>
  <center>
</center></center></figure>

<p> The task ends once the time remaining becomes 0 seconds. You will be paid INR 50 for your participation once you complete this study. In addition top-10 scorers based upon total score obtained will enter a lucky draw, where one lucky draw winner will be awarded Amazon gift cards worth INR 500.<br/><br/>Best of Luck!</p>

	<a class="cen btn" href="<?php echo base_url().'main/testing' ;?>">Enter  into Game</a>
</div>
<br/>
<br/>
</div>
</body>
</html>
