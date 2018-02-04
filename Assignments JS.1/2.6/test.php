<?php
if ($_GET) {
	foreach ($_GET as $key => $val)
		printf($key ." = ". $val ."<br />");
}

?>