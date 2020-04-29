function converStringToNumber(string, x = 10) {

  let chars = string.split('')
  let number = 0;

  // 整数
  let i = 0;

  while (i < chars.length && chars[i] !== '.') {
    number = number * x;
    number += chars[i].codePointAt(0) - '0'.codePointAt(0);
    i++;
  }

  if (chars[i] == '.') {
    i++;
  }

  // 小数
  let fraction = 1;

  while (i < chars.length) {
    fraction = fraction / x;
    number += (chars[i].codePointAt(0) - '0'.codePointAt(0)) * fraction;

    i++;
  }

  // 指数
  if (x === 10 &&
    chars[i] === '-' ||
    chars[i] === '+' ||
    chars[i] === 'e'
  ) i++;
  var index = 0;
  while (x === 10 && i < chars.length) {
    index *= x;
    index += convertStringToNumber(chars[i]);
    if (flag) number /= x ** index
    else number *= x ** index
    i++;
  }

  // 十六进制
  while (x === 16 && letters.includes(chars[i])) {
    number *= x;
    number += chars[i].codePointAt() - 87;
    i++;
  }

  return number;
}

console.log(typeof converStringToNumber('aa'));
console.log(typeof converStringToNumber('1.234'));
console.log(converStringToNumber('1E+10'));