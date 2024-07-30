function fibs(n) {
  let array = [0, 1];
  let firstNum = 0;
  let secondNum = 1;
  let sum;
  if (n === 0) {
    return firstNum;
  }
  for (let i = 3; i <= n; i++) {
    sum = firstNum + secondNum;
    firstNum = secondNum;
    secondNum = sum;
    array.push(secondNum);
  }
  return array;
}

console.log(fibs(8));

function fibsRec(n, array = [0, 1]) {
  console.log("recursion")
  if (n === 0) return array.splice(0, 1);
  if (n <= 2) return array;

  let a = array[array.length - 1];
  let b = array[array.length - 2];
  array.push(a + b);
  return fibsRec(n - 1, array);
}

console.log(fibsRec(8));
