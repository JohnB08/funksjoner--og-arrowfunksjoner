let answer = document.getElementById("desc");
let numCon1 = document.getElementById("num1");
let numCon2 = document.getElementById("num2");
let btn = document.querySelectorAll("button");

function calculator(num1, num2, operator) {
  if (operator === "+") {
    return num1 + num2;
  } else if (operator === "-") {
    return num1 - num2;
  } else if (operator === "*") {
    return num1 * num2;
  } else if (operator === "/") {
    return num1 / num2;
  } else {
  }
}

btn[0].addEventListener("click", () => {
  let sum = calculator(numCon1.valueAsNumber, numCon2.valueAsNumber, "+");
  answer.textContent = `Your answer is ${sum}.`;
});
btn[1].addEventListener("click", () => {
  let sum = calculator(numCon1.valueAsNumber, numCon2.valueAsNumber, "-");
  answer.textContent = `Your answer is ${sum}.`;
});
btn[2].addEventListener("click", () => {
  let sum = calculator(numCon1.valueAsNumber, numCon2.valueAsNumber, "*");
  answer.textContent = `Your answer is ${sum}.`;
});
btn[3].addEventListener("click", () => {
  let sum = calculator(numCon1.valueAsNumber, numCon2.valueAsNumber, "/");
  answer.textContent = `Your answer is ${sum}.`;
});
