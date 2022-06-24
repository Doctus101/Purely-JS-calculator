let result;

const operator = prompt(
  "what operation should be performed ( either +, -, * or / ): "
);

const number1 = parseFloat(prompt("Enter your first number: "));
const number2 = parseFloat(prompt("Enter your second number: "));

switch (operator) {
  case "+":
    result = number1 + number2;
    console.log(`${number1} + ${number2} = ${result}`);
    break;

  case "-":
    result = number1 - number2;
    console.log(`${number1} - ${number2} = ${result}`);
    break;

  case "*":
    result = number1 * number2;
    console.log(`${number1} * ${number2} = ${result}`);
    break;

  case "/":
    result = number1 / number2;
    console.log(`${number1} / ${number2} = ${result}`);
    break;

  default:
    console.log("Invalid operator");
    break;
}
alert(result);
