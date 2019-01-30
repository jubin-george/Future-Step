<?php
include 'db.php';
$sql="insert into stud(name,con,state,dist) values(\"".$_POST['name']."\",\"".$_POST['cont']."\",\"".$_POST['statee']."\",\"".$_POST['dis']."\")";
$suc=mysqli_query($con,$sql);
//echo $sql;
if($suc)
echo 1;
else {
  echo 0;
}
 ?>
