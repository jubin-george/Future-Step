<html>
<head>
  <script src="jquery.min.js" type="text/javascript"></script>
  <script type="text/javascript" src="stud.js"></script>
</head>
<br><br>
Name:<input type="text" id="name" placeholder="Enter Name">
<br><br>
Country:<select id="cont" onchange="select_state(this.value)">

</select><br><br>
State:<select id="statee" onchange="select_district(this.value)">
</select><br><br>
District:<select id="dis">
</select><br><br>

<input type="button" id="send" value="Submit" onclick="register()">
</html>
