
<style>
.button{
  background-color: #555555;
  border: none;
  color: white;
  padding: 10px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
</style>

<script type="text/javascript">

function validateForm()	{
	var goal_array = document.getElementsByName('goal');
	var points_array = document.getElementsByName('points');
	var diff_array = document.getElementsByName('q1');
	var atten_array= document.getElementsByName('atten');
	var at_array= document.getElementsByName('at');
	var goal_filled = false;
	var points_filled = false;
	var diff_filled = false;
	var atten_filled = false;
	var at_filled = false;
	var terms = false;
	if (goal_array[0].checked || goal_array[1].checked || goal_array[2].checked){ goal_filled= true }
	if (points_array[0].checked || points_array[1].checked || points_array[2].checked || points_array[3].checked){ points_filled= true	}
	if (diff_array[0].checked || diff_array[1].checked || diff_array[2].checked || diff_array[3].checked){ diff_filled= true	}
	if (atten_array[0].checked || atten_array[1].checked || atten_array[2].checked || atten_array[3].checked){ atten_filled= true	}
	if (at_array[0].checked || at_array[1].checked || at_array[2].checked || at_array[3].checked){ at_filled= true	}
	if (!(goal_filled && points_filled && diff_filled && atten_filled)) {
		alert('Please answer all the questions.');
		return false;
	}
}
</script>

<script>
function displayQuestion1()	{
	var val = "";
	var val_array = document.getElementsByName('q1');
	for (var i=0; i < val_array.length; i++)	{
		if (val_array[i].checked)
			val = val_array[i].value;
	}
	if(val_array[0].checked || val_array[1].checked)
		{
		document.getElementById('q1_answer').style.color = "red";
		document.getElementById('q1_answer').style.display = "block";
		}
		else
		{
			document.getElementById('q1_answer').style.display = "block";
		}

	if(val_array[0].checked)
	{document.getElementById("diff2").disabled=true;
	document.getElementById("diff3").disabled=true;}

	if(val_array[1].checked)
	{document.getElementById("diff1").disabled=true;
	document.getElementById("diff3").disabled=true;}

	if(val_array[2].checked)
	{document.getElementById("diff1").disabled=true;
	document.getElementById("diff2").disabled=true;}

	showCloseButton();
}

</script>

<script>

function displayQuestion2()	{
	var val = "";

	var val_array = document.getElementsByName('q2');

	for (var i=0; i < val_array.length; i++)	{
		if (val_array[i].checked)
			val = val_array[i].value;
	}
	if(val_array[1].checked || val_array[2].checked || val_array[3].checked)
		{
		document.getElementById('q2_answer').style.color = "red";
		document.getElementById('q2_answer').style.display = "block";
		}
		else
		{
			document.getElementById('q2_answer').style.display = "block";
		}

	if(val_array[0].checked)
	{
		document.getElementById("points2").disabled=true;
		document.getElementById("points3").disabled=true;
		document.getElementById("points4").disabled=true;
	}

	if(val_array[1].checked)
	{document.getElementById("points1").disabled=true;
	document.getElementById("points3").disabled=true;
	document.getElementById("points4").disabled=true;}

	if(val_array[2].checked)
	{document.getElementById("points1").disabled=true;
	document.getElementById("points2").disabled=true;
	document.getElementById("points4").disabled=true;}

	if(val_array[3].checked)
	{document.getElementById("points1").disabled=true;
	document.getElementById("points2").disabled=true;
	document.getElementById("points3").disabled=true;}

	showCloseButton();
}

</script>

<script>
function displayQuestion3()	{
	var val = "";
	var val_array = document.getElementsByName('q3');
	for (var i=0; i < val_array.length; i++)	{
		if (val_array[i].checked)
			val = val_array[i].value;
	}
	if(val_array[0].checked || val_array[2].checked || val_array[3].checked)
		{
		document.getElementById('q3_answer').style.color = "red";
		document.getElementById('q3_answer').style.display = "block";
		}
		else
		{
			document.getElementById('q3_answer').style.display = "block";
		}
		if(val_array[0].checked)
	{document.getElementById("goal2").disabled=true;
	document.getElementById("goal3").disabled=true;
	document.getElementById("goal4").disabled=true;}

	if(val_array[1].checked)
	{document.getElementById("goal1").disabled=true;
	document.getElementById("goal3").disabled=true;
	document.getElementById("goal4").disabled=true;}

	if(val_array[2].checked)
	{document.getElementById("goal1").disabled=true;
	document.getElementById("goal2").disabled=true;
	document.getElementById("goal4").disabled=true;}

	if(val_array[3].checked)
	{document.getElementById("goal1").disabled=true;
	document.getElementById("goal2").disabled=true;
	document.getElementById("goal3").disabled=true;}
	showCloseButton();
}

</script>
<script>
function displayQuestion4()	{
	var val = "";
	var val_array = document.getElementsByName('q4');
	for (var i=0; i < val_array.length; i++)	{
		if (val_array[i].checked)
			val = val_array[i].value;
		}
	if(val_array[1].checked || val_array[2].checked || val_array[3].checked)
		{
		document.getElementById('q4_answer').style.color = "red";
		document.getElementById('q4_answer').style.display = "block";
		}
		else
		{
			document.getElementById('q4_answer').style.display = "block";
		}
		if(val_array[0].checked)
	{document.getElementById("atten2").disabled=true;
	document.getElementById("atten3").disabled=true;
	document.getElementById("atten4").disabled=true;}

	if(val_array[1].checked)
	{document.getElementById("atten1").disabled=true;
	document.getElementById("atten3").disabled=true;
	document.getElementById("atten4").disabled=true;}

	if(val_array[2].checked)
	{document.getElementById("atten1").disabled=true;
	document.getElementById("atten2").disabled=true;
	document.getElementById("atten4").disabled=true;}
	showCloseButton();

	if(val_array[3].checked)
	{document.getElementById("atten1").disabled=true;
	document.getElementById("atten2").disabled=true;
	document.getElementById("atten3").disabled=true;}
	showCloseButton();
}

</script>
<script>
function displayQuestion5()	{
	var val = "";
	var val_array = document.getElementsByName('q5');
	for (var i=0; i < val_array.length; i++)	{
		if (val_array[i].checked)
			val = val_array[i].value;
		}
	if(val_array[1].checked || val_array[2].checked || val_array[3].checked)
		{
		document.getElementById('q5_answer').style.color = "red";
		document.getElementById('q5_answer').style.display = "block";
		}
		else
		{
			document.getElementById('q5_answer').style.display = "block";
		}
		if(val_array[0].checked)
	{document.getElementById("at2").disabled=true;
	document.getElementById("at3").disabled=true;
	document.getElementById("at4").disabled=true;}

	if(val_array[1].checked)
	{document.getElementById("at1").disabled=true;
	document.getElementById("at3").disabled=true;
	document.getElementById("at4").disabled=true;}

	if(val_array[2].checked)
	{document.getElementById("at1").disabled=true;
	document.getElementById("at2").disabled=true;
	document.getElementById("at4").disabled=true;}

	if(val_array[3].checked)
	{document.getElementById("at1").disabled=true;
	document.getElementById("at2").disabled=true;
	document.getElementById("at3").disabled=true;}
	showCloseButton();
}

</script>

<?php
if(isset($_POST['q1']))
{
     echo $_POST['q1'];
}
?>

<html>
<body>

<!-- <form action="instruction_ques" method="post" onsubmit="return validateForm()"> -->
	<?php
                        echo form_open('main/insert_quiz');?>

	<table border="1" cellpadding="10" cellspacing="0" style="width: 810px;" align="center">
		<tr>
		<td>
		<div align="center">
		<h2>Questionnaire about Instructions</h2>
	</div>
			<div align="justify">

				<b><label style="color:#444499;">1. Select the most appropriate option to define nmap command:</label></b><br>
				<input type="radio" id="diff1" name="q1" value="1" onclick="displayQuestion1()" required>Nmap command is used identifying intermediate nodes in the network
				<br>
				<input type="radio" id="diff2" name="q1" value="2" onclick="displayQuestion1()">Nmap command is only used for operating system detection
				<br>
				<input type="radio" id="diff3" name="q1" value="3" onclick="displayQuestion1()">Nmap command is used for port scanning and operating system guessing
				<div id="q1_answer" style="color:green;display:none">The correct answer is option 3: Nmap command is used for port scanning and operating system guessing.</div>
				<br> <br>


				<b><label style="color:#444499;">2. In this game, according to the provided instructions, what nmap command would scan the System1?</label></b><br>
				<input type="radio" id= "points1" name="q2" value="1" onclick="displayQuestion2()" required>nmap System1
				<br>
				<input type="radio"  id= "points2" name="q2" value="2" onclick="displayQuestion2()">nmap &hyphen;O System1
				<br>
				<input type="radio"  id= "points3" name="q2" value="3" onclick="displayQuestion2()">nmap &hyphen;T5 System1
        		<br>
        		<input type="radio"  id= "points4" name="q2" value="4" onclick="displayQuestion2()">nmap &hyphen;sS System1
				<div id="q2_answer" style="color:green;display:none">The correct answer is option 1: nmap System1</div>

				<br><br>


				<b><label style="color:#444499;">3. In this game, according to the provided instructions, what nmap command would list all the computers that are available to you to probe?</label></b><br>
				<input type="radio" id="goal1" name="q3" value="1" onclick="displayQuestion3()" required>nmap System1
				<br>
				<input type="radio" id="goal2" name="q3" value="2" onclick="displayQuestion3()">nmap -sL all
				<br>
				<input type="radio" id="goal3" name="q3" value="3" onclick="displayQuestion3()">nmap all
        		<br>
				<input type="radio" id="goal4" name="q3" value="4" onclick="displayQuestion3()">The list of all computers that are available to you to probe cannot be generated
				<div id="q3_answer" style="color:green;display:none">The correct answer is option 2: nmap -sL all.</div>


				<br><br>
				<b><label style="color:#444499;">4. What shell command would you run to exploit a sql_injection vulnerability on System1? </label></b><br>
				<input type="radio" id="atten1" name="q4" value="1" onclick="displayQuestion4()" required>use_exploit sql_injection System1
				<br>
				<input type="radio" id="atten2" name="q4" value="2" onclick="displayQuestion4()">use_exploit System1
				<br>
				<input type="radio" id="atten3" name="q4" value="3" onclick="displayQuestion4()">use_exploit System1 sql_injection
        		<br>
				<input type="radio" id="atten4" name="q4" value="4" onclick="displayQuestion4()">use_exploit sql_injection
				<div id="q4_answer" style="color:green;display:none">The correct answer is option 1: use_exploit sql_injection System1</div>

        <br><br>
				<b><label style="color:#444499;">5. Which of the following command would you use to transfer the “pin.txt” file to your own computer? </label></b><br>
				<input type="radio" id="at1" name="q5" value="1" onclick="displayQuestion5()" required>scp pin.txt 172.22.31.31
				<br>
				<input type="radio" id="at2" name="q5" value="2" onclick="displayQuestion5()">scp  pin.txt System1
				<br>
				<input type="radio" id="at3" name="q5" value="3" onclick="displayQuestion5()">ls
        		<br>
				<input type="radio" id="at4" name="q5" value="4" onclick="displayQuestion5()">scp pin.txt
				<div id="q5_answer" style="color:green;display:none">The correct answer is option 1: scp pin.txt 172.22.31.31</div>

				<!-- <input type="hidden" name="Mturk_id" value="<?php // echo $Mturk_id; ?>" /> -->
				<!-- <input type="hidden" name="trial" value="<?php  //echo 1; ?>" /> -->

				<br><br>
			</div>
			<div align="center">
				<center>
				<?php echo form_submit('question_submit','Submit');?>
				<!-- <button name="submit"  class="button" type="submit" >Submit</button> -->
				</center>
			</div>


		</td>
		</tr>
		</table>
<!-- </form> -->
<?php
                        echo form_close();?>
<br><br><br><br>


</body>
</html>
