<?php
$id=$_POST['id'];
$name=$_POST['name'];
$address=$_POST['address'];
$phone=$_POST['phone'];
include 'db.php';
$query="update user set name='$name',address='$address',phno='$phone' where id='$id'";
$result=mysqli_query($con,$query);
header('Location: view.php');

 ?>
