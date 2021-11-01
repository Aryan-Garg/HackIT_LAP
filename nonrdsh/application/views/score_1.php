<?php
	$gn=$this->session->userdata('game_number');
	$gn=$gn+1;
	$str='Enter Trial No. '.$gn;
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Hack it!</title>
  <link rel="stylesheet" type="text/css" href="<?php echo base_url().'css/new.css'?>">
</head>
<body>
    <br><a class=" btn " href='<?php echo base_url()."main/wait"?>'><?php echo $str; ?></a>

<div>
	<p id="varun"> </p>
	<script>
		console.log('ID: <?php echo $this->session->userdata('last_id');?>');
	</script>
	<br>
</div>
<div id="contentframe" style="position:relative; top: -400px; left: 60%;"></div>
<br>
</body>
</html>
