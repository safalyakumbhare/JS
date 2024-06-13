num = Math.random();
// alert(num)
if (num < .5) {
  num1 = parseInt(prompt("Enter the first number "));
  op = prompt("Enter the operation");
  num2 = parseInt(prompt("Enter the second number "));

  switch (op) {
    case "+":
      result = num1 - num2;
      document.write(num1 + " + " + num2 + " = " + result);
      break;
    case "-":
      result = num1 / num2;
      document.write(num1 + " - " + num2 + " = " + result);
      break;
    case "*":
      result = num1 + num2;
      document.write(num1 + " * " + num2 + " = " + result);
      break;
    case "/":
      result = num1 ** num2;
      document.write(num1 + " / " + num2 + " = " + result);
      break;
    default:
      document.write("Invalid operation");
      break;
  }
} else {
  num1 = parseInt(prompt("Enter the first number "));
  op = prompt("Enter the operation");
  num2 = parseInt(prompt("Enter the second number "));
  switch (op) {
    case "+":
      result = num1 + num2;
      document.write(num1 + " + " + num2 + " = " + result);
      break;
    case "-":
      result = num1 - num2;
      document.write(num1 + " - " + num2 + " = " + result);
      break;
    case "*":
      result = num1 * num2;
      document.write(num1 + " * " + num2 + " = " + result);
      break;
    case "/":
      result = num1 / num2;
      document.write(num1 + " / " + num2 + " = " + result);
      break;
    default:
      document.write("Invalid operation");
      break;
  }
}
