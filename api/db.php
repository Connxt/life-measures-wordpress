<?php

/*mysql51-097.wc2.dfw1.stabletransit.com
name:cki
     user: 
     password: 
*/

require_once("/../controllers/db_parameters.php");

// Original
// $link = mysql_connect('localhost', $username, $password);
// $db = 'quality_of_life';

// if (!$link) {
//     die('Not connected : ' . mysql_error());
// }

// $db_selected = mysql_select_db($db, $link);
// if (!$db_selected) {
//     die ('Can\'t use foo : ' . mysql_error());
// }

$link = mysqli_connect('localhost', $username, $password);
$db = 'quality_of_life';

if (!$link) {
    die('Not connected : ' . mysqli_error());
}

$db_selected = mysqli_select_db($link, $db);
if (!$db_selected) {
    die ('Can\'t use foo : ' . mysqli_error());
}
?>