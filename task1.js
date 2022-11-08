function Sum(a, b) {
  return a + b;
}

function Subtract(a, b) {
  return a - b;
}

function Multiply(a, b) {
  return a * b;
}
function Divide(a, b) {
  if ((b = 0)) {
    console.log('Math error');
  } else {
    return a / b;
  }
}

function Calculator() {
  console.log('---Calculator---');
  console.log('1+2: ' + Sum(1, 2));
  console.log('2-1: ' + Subtract(2, 1));
  console.log('1*2: ' + Multiply(1, 2));
  console.log('2/1: ' + Divide(2, 1));
}

Calculator();

module.exports.Sum = Sum;
module.exports.Subtract = Subtract;
module.exports.Multiply = Multiply;
module.exports.Divide = Divide;
