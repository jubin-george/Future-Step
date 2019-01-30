<?php
include 'db.php';
$sql="insert into state(cid,sname) values(\"".$_POST['ct']."\",\"".$_POST['st']."\")";
$suc=mysqli_query($con,$sql);
//echo $sql;
if($suc)
echo 1;
else {
  echo 0;
}
 ?>
