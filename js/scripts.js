function findReplace(phrase, oldWord, newWord) {
  return phrase.replace(new RegExp(oldWord.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1"), 'g'), newWord);
}
