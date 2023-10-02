let answer = document.getElementById("desc");
let numCon1 = document.getElementById("num1");
let numCon2 = document.getElementById("num2");
let btnAdd = document.getElementById("btn1");
let btnSub = document.getElementById("btn2");
let btnMult = document.getElementById("btn3");
let btnDivide = document.getElementById("btn4");

function add(num1, num2) {
  return num1 + num2;
}
function subtract(num1, num2) {
  return num1 - num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
const divide = (num1, num2) => {
  return num1 / num2;
};
btnAdd.addEventListener("click", () => {
  let sum = add(numCon1.valueAsNumber, numCon2.valueAsNumber);
  answer.textContent = `Your answer is ${sum}.`;
});
btnSub.addEventListener("click", () => {
  let sum = subtract(numCon1.valueAsNumber, numCon2.valueAsNumber);
  answer.textContent = `Your answer is ${sum}.`;
});
btnMult.addEventListener("click", () => {
  let sum = multiply(numCon1.valueAsNumber, numCon2.valueAsNumber);
  answer.textContent = `Your answer is ${sum}.`;
});
btnDivide.addEventListener("click", () => {
  let sum = divide(numCon1.valueAsNumber, numCon2.valueAsNumber);
  answer.textContent = `Your answer is ${sum}.`;
});
