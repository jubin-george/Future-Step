<?php
include 'db.php';
if(isset($_POST['submit']))
{
$name=$_POST['name'];
$address=$_POST['address'];
$phone=$_POST['phone'];
//echo $name.' '.$address.' '.$phone;
$query="INSERT INTO  `user`(`id`,`name`,`address`,`phno`)VALUES (NULL,'$name','$address','$phone');";
mysqli_query($con,$query);
header('Location: view.php');
}
 ?>
