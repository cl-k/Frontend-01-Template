function converNumberToString(number, x = 10) {
  let integer = Math.floor(number);
  let fraction = null;

  if (x === 10) fraction = ('' + number).match(/\.\d*/);
  let str = '';

  while(integer > 0) {
    str = integer % x + str;
    integer = Math.floor(integer / x);
  }

  return fraction ? str + fraction : str;
}

console.log(typeof converNumberToString(19));