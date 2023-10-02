let answer = document.getElementById("desc");
let numCon1 = document.getElementById("num1");
let numCon2 = document.getElementById("num2");
let btn = document.querySelectorAll("button");

function add(num1, num2) {
  return num1 + num2;
}
function subtract(num1, num2) {
  return num1 - num2;
}
const multiply = (num1, num2) => {
  return num1 * num2;
};
const divide = (num1, num2) => {
  return num1 / num2;
};
btn[0].addEventListener("click", () => {
  let sum = add(numCon1.valueAsNumber, numCon2.valueAsNumber);
  answer.textContent = `Your answer is ${sum}.`;
});
btn[1].addEventListener("click", () => {
  let sum = subtract(numCon1.valueAsNumber, numCon2.valueAsNumber);
  answer.textContent = `Your answer is ${sum}.`;
});
btn[2].addEventListener("click", () => {
  let sum = multiply(numCon1.valueAsNumber, numCon2.valueAsNumber);
  answer.textContent = `Your answer is ${sum}.`;
});
btn[3].addEventListener("click", () => {
  let sum = divide(numCon1.valueAsNumber, numCon2.valueAsNumber);
  answer.textContent = `Your answer is ${sum}.`;
});
