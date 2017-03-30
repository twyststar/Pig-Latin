
var pigLatin = function (wordParameter) {
  var latin = [];
  wordParameter.forEach(function(word){
      var len = word.length;
  if (word.match(/\D/))
  {
    if (word.match(/^[aeiou]/i))
    {
      word = word + "ay";
      latin.push(word);
      return word
    }
    else if (word.match(/^squ/i))
    {

      var pigWord = word.slice(0,3);
      var pigword1 = word.slice(3,len);
      word = pigword1 + pigWord + "ay";
      latin.push(word);
      return word
    }
    else if ((word.match(/^qu/i)) || (word.match(/^[b-df-h-j-np-tv-z][b-df-h-j-np-tv-z]/i)))
    {

    var pigWord = word.slice(0,2);
    var pigword1 = word.slice(2,len);
    word = pigword1 + pigWord + "ay";
    latin.push(word);
    return word
    }
    else  if (word.match(/^[b-df-h-j-np-tv-z]/i))
    {

      var pigWord = word.slice(0,1);
      var pigword1 = word.slice(1,len);
      word = pigword1 + pigWord + "ay";
      latin.push(word);
      return word
    }
  }
  latin.push(word);

  });
 var result = latin.join(" ");
 return result;
};

$(document).ready(function(){
  $("#form1").submit(function(event){
    event.preventDefault();
    var words = [];
    words = ($("#input").val()).split(" ");
    var result = pigLatin(words);
    $("#result").text(result);
    $("#result-div").show();
  });

});
