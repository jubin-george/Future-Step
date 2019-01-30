function getCountry() {
  $("#country").show();
  $("#state").hide();
  $("#district").hide();
}
function getState() {
  $("#country").hide();
  $("#state").show();
  $("#district").hide();
  var data=new FormData();
$.ajax({
  url: "countrylist.php",
  success: function(result){
    //alert(result);
  //	$("#tabInner").html("<tr><th>No.</th><th>Name</th><th>E_mail</th><th >Action</th></tr>");
    var obj = JSON.parse(result);
    $("#selectcountry").html("<option>select</option>");
    for(var i=0;i<obj.admno.length;i++){
      $("#selectcountry").append("<option value="+obj.admno[i].cid+">"+obj.admno[i].cname+"</option>");
    }
  }
});
}
function getdistrict() {
  $("#country").hide();
  $("#state").hide();
  $("#district").show();
  var data=new FormData();
$.ajax({
  url: "countrylist.php",
  success: function(result){
    //alert(result);
  //	$("#tabInner").html("<tr><th>No.</th><th>Name</th><th>E_mail</th><th >Action</th></tr>");
    var obj = JSON.parse(result);
    $("#selectcon").html("<option>select</option>");
    for(var i=0;i<obj.admno.length;i++){
      $("#selectcon").append("<option value="+obj.admno[i].cid+">"+obj.admno[i].cname+"</option>");
    }
  }
});
}
function insertC() {
  var country=document.getElementById("c").value;
			var data=new FormData();
			data.append("country",country);
			$.ajax({
				method: "post",
				url: "csignup.php",
				processData: false,
				contentType: false,
				data: data,
				success: function(result){

							$("#errorAlert").css({"visibility": "visible"});
							$("#signupmsgdata").html(result);
							 if(result==1)
						         alert("Successfully Added!!!!!");
              else {
                alert("Failed!!!!!");
              }
					   	//window.location.assign("login.php");

						}
			});
}
function insertS() {
  var ct=document.getElementById("selectcountry").value;
  var st=document.getElementById("s").value;
			var data=new FormData();
			data.append("ct",ct);
      data.append("st",st);
			$.ajax({
				method: "post",
				url: "ssignup.php",
				processData: false,
				contentType: false,
				data: data,
				success: function(result){

							$("#errorAlert").css({"visibility": "visible"});
							$("#signupmsgdata").html(result);
							 if(result==1)
						         alert("Successfully Added!!!!!");
              else {
                alert("Failed!!!!!");
              }
					   	//window.location.assign("login.php");

						}
			});
}
function select_state(val) {
  var data=new FormData();
$.ajax({
  type:"POST",
  url: "select_state.php",
  data:'cid='+val,
  success: function(result){

      var obj = JSON.parse(result);
      $("#selects").html("<option>select</option>");
      for(var i=0;i<obj.admno.length;i++){
        $("#selects").append("<option value="+obj.admno[i].sid+">"+obj.admno[i].sname+"</option>");
      }
    }
  });


    }
    function insertD() {
      var con=document.getElementById("selects").value;
      var d=document.getElementById("d").value;
    			var data=new FormData();
    			data.append("con",con);
          data.append("d",d);
    			$.ajax({
    				method: "post",
    				url: "dsignup.php",
    				processData: false,
    				contentType: false,
    				data: data,
    				success: function(result){

    							$("#errorAlert").css({"visibility": "visible"});
    							$("#signupmsgdata").html(result);
    							 if(result==1)
    						         alert("Successfully Added!!!!!");
                  else {
                    alert("Failed!!!!!");
                  }
    					   	//window.location.assign("login.php");

    						}
    			});
    }
