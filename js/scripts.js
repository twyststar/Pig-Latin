var pigLatin = function (wordParameter) {
  wordParameter.forEach(function(word){
  if (word.match(/\D/))
  { if (word.match(/^[aeiou]/))
    {
      word = word + "ay";
    }
    else if (word.match(/^squ/))
    {
      var len = word.length;
      var pigWord = word.slice(0,3);
      var pigword1 = word.slice(3,len);
      word = pigword1 + pigWord + "ay"
    }
    else if ((word.match(/^qu/)) || (word.match(/^[bcdfghjklmnpqrstvwxyz][bcdfghjklmnpqrstvwxyz]/)))
    {
      var len = word.length;
      var pigWord = word.slice(0,2);
      var pigword1 = word.slice(2,len);
      word = pigword1 + pigWord + "ay"
      }
      else  if (word.match(/^[bcdfghjklmnpqrstvwxyz]/))
      {
        var len = word.length;
        var pigWord = word.slice(0,1);
        var pigword1 = word.slice(1,len);
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
