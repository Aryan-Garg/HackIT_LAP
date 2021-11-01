<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Login</title>
<link rel="stylesheet" type="text/css" href="<?php echo base_url().'css/new.css'?>">
</head>
<body>


<div id="container">
	<h1 align="center"><font color="blue">Hack it !</font></h1>
<?php
	echo form_open('main/login_validation');
	// If there are errors then this echos them out
	$signup_url = base_url()."main/signup";
?>
  <h1 align="center"> <font color='blue'>Login to proceed</font></h1>
  <div align="center"><?php echo validation_errors();?></div>

	<table align="center" width="30%">
	<tr>
      <td align="center"><font size='4' color='blue'>Your College Email ID:</font></td>
      <td align="center" width="200"><?php echo form_input('username');?></td>
    </tr>
    <br>
    </br>
    <tr>
      <td align="center"><font size='4' color='blue'>Password:</font></td>
      <td align="center"><?php echo form_password('password');?></td>
    </tr>
    <tr>
    <td> </td>
      <td align="center"><font color='blue' size='5'><?php echo form_submit('login_submit','Login');?></font></td>

    </tr>
    <tr><td align="center"></td>
    	<td align="center"><?php echo "<a href=".$signup_url.">Register</a>";?></td>
    </tr>
  </table>

<?php

	echo form_close();
?>
</div>

</body>
</html>
