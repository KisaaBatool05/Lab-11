function task5(n) {
  var arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 11, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  for (i = 0; i < arr.length; i++) {
    if (arr[i] == n) {
      return true;
    }
  }
  return false;
}

module.exports.task5 = task5;
