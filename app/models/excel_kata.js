var excelFuncs = {};

// caps expected
var charToNum = function (char) {
  return char.charCodeAt(0) - 64;
}

var numToChar = function (num) {
  return String.fromCharCode(64+num);
}

var isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

var isAlpha = function (str) {
  return str.match(/[a-zA-Z]+/);
}

var validateColNum = function (n) {
  if (!n || !parseInt(n) || !isNumber(n)) { 
    return 'need a column number >= 1';
  }
}

var validateColStr = function (str) {
  if (!str || isNumber(str) || !isAlpha(str)) {
    return 'need a column string [a-zA-Z]+';
  }
}

var mod26 = function (n) { 
  var d = n%26;
  return (d === 0) ? 26 : d;
}

var div26 = function (n, d) { 
  var n = Math.floor(n/26);
  return (d === 26) ? n - 1 : n;
}

excelFuncs.toColNotation = function (n) {
  var isNotValid = validateColNum(n);
  if (isNotValid) { return isNotValid; }

  var res = [], d = 0;

  while (n !== 0) {
    d = mod26(n);
    n = div26(n, d);
    res.push(numToChar(d));
  }
  return res.reverse().join('');
}

excelFuncs.fromColNotation = function (str) {
  var isNotValid = validateColStr(str);
  if (isNotValid) { return isNotValid };

  str = str.toUpperCase();
  var strAry = str.split('').reverse();
  var num = 0;

  for (var i = 0; i<strAry.length; i++) {
    num = num + (charToNum(strAry[i]) * Math.pow(26, i));
  }
  return num;
}

module.exports = excelFuncs;
