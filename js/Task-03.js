// Form Events, Input, Focus, Blur and Submit.
// Використовуй шаблон форми з файлу html.
const formEl = document.querySelector("js-contact-form");

// 1 - При події `input`, якщо користувач ввів в поле більше
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`
// formEl.addEventListener("input", (e) => {
//   const input = e.target;
//   if (input.value.length >= 6) {
//     input.classList.add("success");
//     input.classList.remove("error");
//   } else {
//     input.classList.add("error");
//     input.classList.remove("success");
//   }
// });

// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`
// inputEl.addEventListener("focus", () => {
//   if (inputEl.value.trim() === "") {
//     inputEl.style.outline = "3px solid red";
//   } else {
//     inputEl.style.outline = "3px solid green";
//     }
// const formEl = document.querySelector(".js-contact-form");
const inputEl = document.querySelector(".js-username-input");

// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`

// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку,
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. Також реалізуй додавання
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видали, зроби так,
// щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення
// false, верни дефолтне значення "Anonymous" у span.
formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const { userName, accept } = e.target.elements;
  const inputValue = userName.value.trim();
  const check = accept.checked;
  if (inputValue === "") {
    alert("input can not be empty!!");
    return;
  }
  if (!check) {
    alert("You need accept!");
    return;
  }
  // spanEl.textContent = inputValue;
  const data = { userName: inputValue };
  console.log(data);
  formEl.reset();
  spanEl.textContent = "Anonymous";
});
