<html>
<head>
  <script src="jquery.min.js" type="text/javascript"></script>
  <script type="text/javascript" src="country.js"></script>
</head>
<input type="button" id="coun" value="country" onclick="getCountry()">
<input type="button" id="stat" value="state" onclick="getState()">
<input type="button" id="dist" value="district" onclick="getdistrict()">


<div id="country" hidden>
  <br>
<input type="text" id="c" placeholder="Enter Country">
<input type="button" id="submit" value="Submit" onclick="insertC()">
</div>
<div id="state" hidden>
  <br>
  <select id="selectcountry" placeholder="select">

  </select>
<input type="text" id="s" placeholder="Enter State">
<input type="button" id="statesubmit" value="Submit" onclick="insertS()">
</div>
<div id="district" hidden>
  <br>
  <select id="selectcon" onchange="select_state(this.value)">

  </select>
  <select id="selects">
  </select>
<input type="text" id="d" placeholder="Enter District">
<input type="button" id="distsubmit" value="Submit" onclick="insertD()">
</div>
<br>
<a href="reg.php">Sudent Registration</a>
<br>
</html>
