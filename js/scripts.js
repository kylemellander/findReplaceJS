function findReplace(phrase, oldWord, newWord) {
  return phrase.replace(new RegExp(oldWord, 'g'), newWord);
}
