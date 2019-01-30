<?php
include 'db.php';
$sql="insert into country(cname) values(\"".$_POST['country']."\")";
$suc=mysqli_query($con,$sql);
//echo $sql;
if($suc)
echo 1;
else {
  echo 0;
}
 ?>
