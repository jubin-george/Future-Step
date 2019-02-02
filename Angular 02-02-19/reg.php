<?php
  $con=mysqli_connect("localhost","root","","demodb");
  if(!con){
    echo "Connection not working";
  }

$postData=file_get_contents("php://input");
$request=json_decode($postData);
$name=mysqli_real_escape_string($con,trim($request->data->name));
$password=mysqli_real_escape_string($con,trim($request->data->password));

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT,GET,POST");
header("Access-Control-Allow-Headers: Origin,X-Requested-With,Content-Type,Accept");
$query="insert into login (name,password,status) values('".$name."'.'".$password."')";
if(mysqli_query($conn,$query))
{
  http_response_code(201);
  $student=['name'=>$name,'pass'=>$pass,'id'=>mysql_insert_id($con)];
  echo json_encode(['data'=>$student]);
}
else {
  http_response_code(422);
}
?>
