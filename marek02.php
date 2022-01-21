<?php
$servername = "localhost";
$username = "testajaxvse4fanc";
$password = "hesloheslo1";
$db="vsetest";
$conn = mysqli_connect($servername, $username, $password,$db);


    $name=$_POST['name'];
	$email=$_POST['email'];
	$phone=$_POST['phone'];
	$city=$_POST['city'];
    
	$sql = "INSERT INTO `user_data`( `name`, `email`, `phone`, `city`) 
	VALUES ('$name','$email','$phone','$city')";

	if (mysqli_query($conn, $sql)) {
		echo json_encode(array("statusCode"=>200));
	} 
	else {
		echo json_encode(array("statusCode"=>201));
	}
	mysqli_close($conn);

?>