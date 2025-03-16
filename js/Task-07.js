//  Напишіть функцію getNumbers(min, max), що приймає 2 параметри -
// мінімальне і максимальне число відповідно.
// Напишіть цикл всередині функції, який виводить у консоль
// всі числа від max до min за спаданням.
// Окрім цього, підрахуйте суму всіх парних чисел в цьому циклі
// і поверніть її з функції.
function getNumbers(min, max) {
  let count = 0;
  for (let i = max; i >= min; i--) {
    console.log(`i:  ${i}`);
    if (i % 2 === 0) {
      count += i;
    }
  }
  return `Total count ${count}`;
}
console.log(getNumbers(65, 85));
