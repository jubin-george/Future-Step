<?php
include 'db.php';
$id=$_GET['id'];
$query="select * from user where id='$id'";
$result=mysqli_query($con,$query);
$row=mysqli_fetch_array($result);
 ?>
 <html>
 <body>
 <form action="editqueries.php" method="POST">
   <table>
     <tr><td>Name:</td><td><input type="text" name="name" value=<?php echo $row['name'];?>></td></tr>
     <tr><td>Address:</td><td><textarea  name="address" cols="22" rows="5" ><?php echo $row['address'];?></textarea></td></tr>
     <tr><td>Mobile:</td><td><input type="number" name="phone" value=<?php echo $row['phno'];?>></td></tr>
     <tr><td><input type="hidden" name="id" value=<?php echo $id;?>></td></tr>
     <tr><td></td><td><input type="submit" name="submit" value="Update" ></td></tr>
   </table>
 </form>
 </body>
 </html>
