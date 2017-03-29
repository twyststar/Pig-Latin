
var vowels = ["a","e","i","o","u"];
var consonant = ["b","c","d","f","g","h","j","k","l","m","n","p","r","s","t","v","w","x","y","z"];

var pigLatin = function (wordParameter) {
  wordParameter.forEach(function(word){
    // var pattern = /^[0-9]/;
    // var patternTest = word.match(pattern);
    // console.log(patternTest);
  if (word.match(/\D/))
  {
    word = word + "ay";
    alert("number");
  }
  // else
  // {
  //
  // }
   console.log(word);

  });
};





$(document).ready(function(){
  $("#form1").submit(function(event){
    event.preventDefault();
    var words = [];
    words = ($("#input").val()).split(" ");
    console.log(words);
    var result = pigLatin(words);
  });

});
