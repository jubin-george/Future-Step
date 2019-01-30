<?php
include 'db.php';
$id=$_POST['sid'];
$query="select * from district where sid='$id'";
$query_exe=mysqli_query($con,$query);
$dname=array();
$did=array();
$len=0;
if($query_exe){
  while($resultset=mysqli_fetch_assoc($query_exe)){
      $len++;
      $dname[$len]=$resultset['dname'];
      $did[$len]=$resultset['did'];
    }
}
$json="{ \"size\":\"".$len."\",\"admno\" : [";
for($i=1;$i<=$len;$i++){

  if($i>=2)
    $json=$json.",";
  $json=$json."{
          \"dname\":\"".$dname[$i]."\",
          \"did\":\"".$did[$i]."\"
          }" ;
}
$json=$json.']}';



echo $json;


 ?>
