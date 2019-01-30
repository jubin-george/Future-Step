<?php
include 'db.php';
$sql="insert into district(sid,dname) values(\"".$_POST['con']."\",\"".$_POST['d']."\")";
$suc=mysqli_query($con,$sql);
//echo $sql;
if($suc)
echo 1;
else {
  echo 0;
}
 ?>
