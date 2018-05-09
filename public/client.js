// client-side js
// run by the browser each time your view template is loaded

(function(){
  $("#fetch").click(function(){
    let url = "https://req-header-parser-test.glitch.me/api/getmyinfo";
    $.get(url,function(data){
      $("#results").html(data.toString());
    }); 
  }); 
})()