// Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'):
// <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples>

const userNum = Number(prompt("Enter a number"));
function userTime(userNum) {
  const minutes = Math.floor(userNum / 60);
  const seconds = userNum % 60;
  const formatMinutes = String(minutes).padStart(2, "0"); //доповнює рядка зліва(перед) оригінальним рядком(1параметр -  бажана довжина рядка, 2параметр - чим буде допосненний рядок)
  const formatSeconds = String(seconds).padStart(2, "0");
  return alert(`${formatMinutes}:${formatSeconds}`);
}
userTime(userNum);
