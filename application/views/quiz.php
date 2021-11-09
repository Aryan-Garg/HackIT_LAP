<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Signup</title>

</head>
<body background="<?php echo base_url().'images/background.jpg'?>" >

<script src='<?php echo base_url()."hacker/jquery.min.js"?>'></script>
<script type="text/javascript">
$(document).ready(function() {
			function initAMTUser()	{
			var prmstr = window.location.search.substr(1);
			var prmarr = prmstr.split("=");
			amt_id = prmarr[1];
			document.getElementById("amt_user").value = amt_id;
		}

		function validateQuestion(ques_num)	{
			var qFilled = false;
			var q_array = document.getElementsByName('q'+ques_num);
			for (var i=0; i < q_array.length; i++)	{
				if (q_array[i].checked)
					qFilled = true;
			}
			if (!qFilled)	{
				alert('Please answer question '+ ques_num);
				return false;
			}
			return true;
		}

		function validateForm()	{
			if((!$("input[value='yes']").is(':checked')) && (!$("input[value='no']").is(':checked'))){
				alert('Please answer question 4');
				return false;
			}

			if (!validateQuestion(1) || !validateQuestion(2) || !validateQuestion(3) || !validateQuestion(11)){
				return false;
			}


			if(($("input[value='yes']").is(':checked')) && (!$.trim($("textarea[name='q5']").val()))){
				alert('Please answer question 5');
				return false;
			}

			if(!(document.getElementById("q6.1").checked) && !(document.getElementById("q6.2").checked) && !(document.getElementById("q6.3").checked) && !(document.getElementById("q6.4").checked) && !(document.getElementById("q6.5").checked) ){
				alert('Please answer question 6');
				return false;
			}

			if(!(document.getElementById("q7.1").checked) && !(document.getElementById("q7.2").checked) && !(document.getElementById("q7.3").checked) && !(document.getElementById("q7.4").checked) && !(document.getElementById("q7.5").checked) && !(document.getElementById("q7.6").checked) && !(document.getElementById("q7.7").checked) ){
				alert('Please answer question 7');
				return false;
			}

			// validate q8
			if(!(document.getElementById("q8.1").checked) && !(document.getElementById("q8.2").checked) && !(document.getElementById("q8.3").checked) && !(document.getElementById("q8.4").checked) && !(document.getElementById("q8.5").checked) && !(document.getElementById("q8.6").checked) && !(document.getElementById("q8.7").checked) && !(document.getElementById("q8.8").checked) && !(document.getElementById("q8.9").checked) && !(document.getElementById("q8.10").checked) && !(document.getElementById("q8.11").checked) ){
				alert('Please answer question 8');
				return false;
			}

			// validate q9
			if(!(document.getElementById("q9.1").checked) && !(document.getElementById("q9.2").checked)){
				alert('Please answer question 9');
				return false;
			}
			if((document.getElementById("q9.2").checked) && (!$.trim($("textarea[name='q9[]']").val()))){
				alert('Please specify your strategy in question 9');
				return false;
			}

			if(!($.trim($("textarea[name='q10']").val()))){
				alert('Please answer question 10 ');
				return false;
			}

			if(!($.trim($("textarea[name='q12']").val()))){
				alert('Please answer question 12 ');
				return false;
			}

			return true;
		}

</script>

<div id="container">


	<form  action="testing" method="post" autocomplete="on" id="sigunp_form">
				<h1> Instruction comprehension quiz </h1>
				<p>
					<label style="color:#444499;">1. Select the most appropriate option to define nmap command:</label><br>
						<input type="radio" name="q1" value="1">Nmap command is used identifying intermediate nodes in the network<br>
						<input type="radio" name="q1" value="2">Nmap command is only used for operating system detection <br>
						<input type="radio" name="q1" value="3">Nmap command is used for port scanning and operating system guessing <br>
				</p>
				<p>
					<label style="color:#444499;">2. In this game, according to the provided instructions, what nmap command would scan the System1? </label><br>
						<input type="radio" name="q2" value="1">nmap System1<br>
						<input type="radio" name="q2" value="2">nmap –O System1  <br>
						<input type="radio" name="q2" value="3">nmap –T5 System1 <br>
						<input type="radio" name="q2" value="3">nmap –sS System1 <br>
				</p>
				<p>
					<label style="color:#444499;">3. In this game, according to the provided instructions, what nmap command would list all the computers that are available to you to probe? </label><br>
						<input type="radio" name="q3" value="1">nmap System1<br>
						<input type="radio" name="q3" value="2">nmap -sL all <br>
						<input type="radio" name="q3" value="3">nmap all  <br>
						<input type="radio" name="q3" value="4">The list of all computers that are available to you to probe cannot be generated   <br>
				</p>
				<p>
					<label style="color:#444499;">4. What shell command would you run to exploit a sql_injection vulnerability on System1?  </label><br>
						<input type="radio" name="q4" value="1">use_exploit sql_injection System1<br>
						<input type="radio" name="q4" value="2">use_exploit System1 <br>
						<input type="radio" name="q4" value="3">use_exploit System1 sql_injection  <br>
						<input type="radio" name="q4" value="4">use_exploit sql_injection   <br>
				</p>
				<p>
					<label style="color:#444499;">5. Which of the following command would you use to transfer the “pin.txt” file to your own computer?   </label><br>
						<input type="radio" name="q4" value="1">scp pin.txt 172.22.31.31 <br>
						<input type="radio" name="q4" value="2">scp  pin.txt System1 <br>
						<input type="radio" name="q4" value="3">ls  <br>
						<input type="radio" name="q4" value="4">scp pin.txt   <br>
				</p>
				<p class="signin button">
					<input type="submit" value="Next"/> 
				</p>
			</form>
</div>
</body>
</html>
