<?php

//these are varibles
$user = "root"; // user name
$pass = "root"; // user password
$host = "localhost"; //host we're using inside of MAMP;
$db = "a3_cooperinfo"; // database we're connecting to

//1. Create a connection to the database

$conn = mysqli_connect($host, $user, $pass, $db);
mysqli_set_charset($conn, 'utf8');

//test connection
if (!$conn) {
  echo 'something broke, your connection will not work';
  exit;
}
//if successful
//echo 'connected, yo!';

$myQuery = "SELECT * FROM mainmodel"; //this is a simple query
$result = mysqli_query($conn, $myQuery); //result holds the result set
$rows = array(); //we'll push each row into this array

while ($row = mysqli_fetch_assoc($result)) {
  $rows[] = $row; // push each row from the result (the db rows) into this array

}

//lets see what you get!
//var_dump($rows);
if (isset($_GET['getVideos'])) {

    $myQuery = "SELECT * FROM video" // this is a simple SQL query
    $result = mysqli_query($conn, $myQuery); //result holdd the result set

    $rows = array();

    while   ( $row = mysqli_fetch_assoc($result)){
      $rows[] = $row;
}
    echo json_encode($rows);
}


?>
