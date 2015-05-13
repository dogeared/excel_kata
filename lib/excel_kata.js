var excelFuncs = {};

// caps expected
var charToNum = function (char) {
  return char.charCodeAt(0) - 64;
}

var numToChar = function (num) {
  return String.fromCharCode(64+num);
}

excelFuncs.toColNotation = function (n) {
  var res = [];
  while (n !== 0) {
    var digit = n%26;
    n = Math.floor(n/26);    
    if (digit === 0) {
      n--;
      digit = 26;
    } 
    res.push(numToChar(digit));
  }
  return res.reverse().join('');
}

excelFuncs.fromColNotation = function (str) {
  var strAry = str.split('').reverse();
  var num = 0;

  for (var i = 0; i<strAry.length; i++) {
    num = num + (charToNum(strAry[i]) * Math.pow(26, i));
  }
  return num;
}

module.exports = excelFuncs;
