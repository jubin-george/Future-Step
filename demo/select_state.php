<?php
include 'db.php';
$id=$_POST['cid'];
$query="select * from state where cid='$id'";
$query_exe=mysqli_query($con,$query);
$sname=array();
$sid=array();
$len=0;
if($query_exe){
  while($resultset=mysqli_fetch_assoc($query_exe)){
      $len++;
      $sname[$len]=$resultset['sname'];
      $sid[$len]=$resultset['sid'];
    }
}
$json="{ \"size\":\"".$len."\",\"admno\" : [";
for($i=1;$i<=$len;$i++){

  if($i>=2)
    $json=$json.",";
  $json=$json."{
          \"sname\":\"".$sname[$i]."\",
          \"sid\":\"".$sid[$i]."\"
          }" ;
}
$json=$json.']}';



echo $json;


 ?>
