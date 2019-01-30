<?php
	include 'db.php';

	$query="select * from country";
	$query_exe=mysqli_query($con,$query);
  $cname=array();
  $cid=array();
	$len=0;

	if($query_exe){
		while($resultset=mysqli_fetch_assoc($query_exe)){
				$len++;
        $cname[$len]=$resultset['cname'];
        $cid[$len]=$resultset['cid'];
			}
	}
	$json="{ \"size\":\"".$len."\",\"admno\" : [";
	for($i=1;$i<=$len;$i++){

		if($i>=2)
			$json=$json.",";
		$json=$json."{
            \"cname\":\"".$cname[$i]."\",
            \"cid\":\"".$cid[$i]."\"
						}" ;
	}
	$json=$json.']}';



	echo $json;

?>
