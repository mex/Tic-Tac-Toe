<?php
header('Content-Type:text/html;charset=utf-8');
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<title>Tic tac toe</title>
	<link type="text/css" rel="stylesheet" href="frontend/stylesheets/global.css" />
	<link type="text/css" rel="stylesheet" href="frontend/stylesheets/jquery-ui-1.8.11.custom.css" />
	<script src="frontend/javascripts/jquery-1.5.1.min.js" type="text/javascript"></script>
	<script src="frontend/javascripts/jquery-ui-1.8.11.custom.min.js" type="text/javascript"></script>
	<script src="frontend/javascripts/tictactoe.js" type="text/javascript"></script>
</head>

<body>
	<div id="console" style="position:absolute;top:0;right:0;width:250px;height:400px;overflow:scroll"></div>
	<div class="container">
		<table class="board">
			<tr>
<?php
for($i=1;$i<=9;$i++) {
?>
				<td id="sq_<?php echo $i; ?>">
					<div class="piece_box"></div>
				</td>
<?php
	if($i % 3 == 0) {
?>
			</tr>
			<tr>
<?php
	}
}
?>
			</tr>
		</table>
	</div>
</body>
</html>