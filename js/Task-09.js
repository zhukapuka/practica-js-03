// Напишіть функцію isAdult(age), яка  приймає число - вік користувача і повертає true,
// якщо параметр age більше чи дорівнює 18.
// В іншому випадку вона запитує підтвердження через confirm
// і повертає його результат (true/false).

function isAdult1(age) {
  if (age >= 18) {
    return true;
  }
  return confirm("Are you adult?");
}
console.log(isAdult1(8));
// 2
function isAdult2(age) {
  if (age >= 18) {
    return true;
  } else {
    const checkAge = confirm("Are you adult?");
    return checkAge;
  }
}
console.log(isAdult2(13));
// 3
function isAdult3(age) {
  return age >= 18 ? true : confirm("Are you adult?");
}
console.log(isAdult3(24));
// 4
function isAdult4(age) {
  return age >= 18 || confirm("Are you adult?");
}
console.log(isAdult4(16));
