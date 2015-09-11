function findReplace(phrase, oldWord, newWord) {
  return phrase.replace(new RegExp(oldWord.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1"), 'gi'), newWord);
}

$(document).ready(function() {
  $("form#findReplace").submit(function(event) {
    var phrase = $("#phrase").val();
    var oldWord = $("#oldWord").val();
    var newWord = $("#newWord").val();
    var result = findReplace(phrase, oldWord, newWord);

    $("#results p").text(result);
    $("#results").show();

    event.preventDefault();
  })
})
