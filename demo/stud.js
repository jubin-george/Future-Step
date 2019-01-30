$(function(){
  $.ajax({
    url: "countrylist.php",
    success: function(result){
      //alert(result);
    //	$("#tabInner").html("<tr><th>No.</th><th>Name</th><th>E_mail</th><th >Action</th></tr>");
      var obj = JSON.parse(result);
      $("#cont").html("<option>select</option>");
      for(var i=0;i<obj.admno.length;i++){
        $("#cont").append("<option value="+obj.admno[i].cid+">"+obj.admno[i].cname+"</option>");
      }
    }
  });
});
function select_state(val) {
  var data=new FormData();
$.ajax({
  type:"POST",
  url: "select_state.php",
  data:'cid='+val,
  success: function(result){

      var obj = JSON.parse(result);
      $("#statee").html("<option>select</option>");
      for(var i=0;i<obj.admno.length;i++){
        $("#statee").append("<option value="+obj.admno[i].sid+">"+obj.admno[i].sname+"</option>");
      }
    }
  });
}
function select_district(val) {
  var data=new FormData();
$.ajax({
  type:"POST",
  url: "select_dist.php",
  data:'sid='+val,
  success: function(result){

      var obj = JSON.parse(result);
      $("#dis").html("<option>select</option>");
      for(var i=0;i<obj.admno.length;i++){
        $("#dis").append("<option value="+obj.admno[i].did+">"+obj.admno[i].dname+"</option>");
      }
    }
  });
}
function register() {
  var name=document.getElementById("name").value;
  var cont=document.getElementById("cont").value;
  var statee=document.getElementById("statee").value;
  var dis=document.getElementById("dis").value;
      var data=new FormData();
      data.append("name",name);
      data.append("cont",cont);
      data.append("statee",statee);
      data.append("dis",dis);
      $.ajax({
        method: "post",
        url: "sreg.php",
        processData: false,
        contentType: false,
        data: data,
        success: function(result){

              $("#errorAlert").css({"visibility": "visible"});
              $("#signupmsgdata").html(result);
               if(result==1)
                     alert("Successfully Registered!!!!!");
              else {
                alert("Failed!!!!!");
              }
              //window.location.assign("login.php");

            }
      });
}
