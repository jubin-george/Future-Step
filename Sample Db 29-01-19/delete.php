<?php
include 'db.php';
$id=$_GET['id'];
$query="delete from user where id='$id'";
$result=mysqli_query($con,$query);
header('Location: view.php');
 ?>
