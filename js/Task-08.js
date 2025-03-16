// Напишіть функцію min(a, b), яка приймає 2 числа і повертає меньше з них.
// Потрібно додати перевірку, що функція отримує саме числа, в іншому випадку
// повертати з функції рядок - 'Not a number!'.

function min(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    if (a > b) {
      return b;
    } else {
      return a;
    }
  } else {
    return "Not a nubmer";
  }
}
console.log(min(6, 2));

// 2
function min2(a, b) {
  return typeof a !== "number" || typeof b !== "number"
    ? "Not a number!"
    : Math.min(a, b);
}
console.log(min2(69, 52));
