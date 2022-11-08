function reverse(name) {
  var split = name.split('');
  var reverseWord = split.reverse();
  return reverseWord.join('');
}

module.exports = reverse;
