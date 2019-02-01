<?php

echo '<a href="form.php">Click To Insert</a>';

include 'db.php';

//echo $name.' '.$address.' '.$phone;
$query="select * from user";
$result=mysqli_query($con,$query);
$rowcount=mysqli_num_rows($result);
?>
<table border="1">
  <tr><th>Name</th><th>Address</th><th>Mobile</th><th>Edit</th><th>Deletion</th></tr>


<?php
if($rowcount!=0)
{
//  $row=mysqli_fetch_array($result);
  while($row=mysqli_fetch_array($result))
  {
    echo '<tr><td>'.$row['name'].'</td>';
    echo '<td>'.$row['address'].'</td>';
    echo '<td>'.$row['phno'].'</td>';
    echo '<td><a href="update.php?id='.$row['id'].'">Edit</a></td>';
    echo '<td><a href="delete.php?id='.$row['id'].'">Delete</a></td></tr>';
  }
echo "</table>";
}
 ?>
