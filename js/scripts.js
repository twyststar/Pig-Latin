
var pigLatin = function (wordParameter) {


}




$(document).ready(function(){
  $("#form1").submit(function(event){
    event.preventDefault();
    var words = [];
    words = ($("#input").val()).split(" ");
    console.log(words);
  });

});
