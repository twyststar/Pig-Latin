
var vowels = ["a","e","i","o","u"];
var consonant = ["b","c","d","f","g","h","j","k","l","m","n","p","r","s","t","v","w","x","y","z"];

var pigLatin = function (wordParameter) {
  wordParameter.forEach(function(word){
  if (word.match(/\D/))
  { if (word.match(/^[aeiou]/))
    {
      word = word + "ay";
    }
    else if (word.match(/^qu/))
    {
      var len = word.length;
      var pigWord = word.slice(0,2);
      var pigword1 = word.slice(2,len);
      word = pigword1 + pigWord + "ay"
      }
    // word = word + "ay";
    // alert("number");
  }

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
