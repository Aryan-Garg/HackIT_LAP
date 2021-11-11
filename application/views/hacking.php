<html>
  <head>  
    <meta name="keywords" content="Hacker Terminal" />
    <meta http-equiv="content-type" content="text/html;charset=UTF-8" />
    <script src='<?php echo base_url()."hacker/sys_graph.js"?>'></script>    
    <script src='<?php echo base_url()."hacker/fixed-data.js"?>'></script>
    <script src='<?php echo base_url()."hacker/jquery.min.js"?>'></script>
    <script src='<?php echo base_url()."hacker/wterm.jquery.js"?>'></script>
    <script src='<?php echo base_url()."hacker/server.js"?>'></script>
    <script src='<?php echo base_url()."hacker/server.min.wi.js"?>'></script>
    <script type="text/javascript"> 
      parent.window.document.title="Hack It";
    </script>
    <link rel="stylesheet" href='<?php echo base_url()."hacker/wterm.css"?>' type="text/css" />
    <style> body { background: #000; font-size: 1em;} </style>
</head>
<body>
    <div class="float-right" id="float-right">    
    <iframe src="http://localhost/sample_rdsh/login.php"  class="chatBox" id="chatBox">
    </iframe>
    </div>
    <div class="wterm-parent" id="wterm-parent">
    <div id='wterm' class="float-left" id="float-left">
    </div>
    </div>
</body>
</html>