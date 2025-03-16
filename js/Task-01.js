// Завдання 1 практика4 (Модуль7-8):

// 1 - отримай body елемент і виведи його в консоль;
const showBody = document.querySelector("body");
console.log(showBody);

// 2 - отримай елемент id="title" і виведи його в консоль;
const showTitle = document.querySelector("#title");
console.log(showTitle);

// 3 - отримай елемент class="list" і виведи його в консоль;
const showList = document.querySelector(".list");
console.log(showList);

// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
const showDataTopic = document.querySelectorAll("[data-topic]");
console.log(showDataTopic);

// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
const showFirstElementDataTopic = showDataTopic[0];
console.log(showFirstElementDataTopic);

// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
const showLastElementDataTopic = showDataTopic[showDataTopic.length - 1];
console.log(showLastElementDataTopic);
// another
const show2 = document.querySelector(".list").lastElementChild;
console.log(show2);

// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
const showH1 = document.querySelector("h1");
const showNextSibling = showH1.nextElementSibling;
console.log(showNextSibling);

// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
const showAllH3 = document.querySelectorAll("h3");
const showAllH3Console = showAllH3.forEach((elemh3) => {
  console.log(elemh3);
});

// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
const addClassActive = showAllH3.forEach((elemh3) => {
  elemh3.classList.add("active");
});

// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
const findLiElem = document.querySelector('li[data-topic="navigation"]');
console.log(findLiElem);

// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
const showLibackground = (findLiElem.style.backgroundColor = "yellow");
// setAttribute(
//   "style",
//   "backgroundcolor: yellow;"
// );

// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
const changeP = findLiElem.querySelector("p");
changeP.textContent = "Я змінив тут текст!";
console.log(changeP);

// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;
const currentTopic = "manipulation";
const showchangeDataTopic = document.querySelector(
  `[data-topic=${currentTopic}]`
);
console.log(showchangeDataTopic);

// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;//через style
const addToFindDataTopic = showchangeDataTopic.setAttribute(
  "style",
  "background-color:blue"
);

// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
const findHeaderClas = document.querySelector(".completed");
console.log(findHeaderClas);

// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
const delLiElemClosest = findHeaderClas.closest("li");
delLiElemClosest.remove();

// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
// const newText = document.createElement("p");
// newText.textContent = "Об'єктна модель документа (Document Object Model)";
// showH1.after(newText);
showH1.insertAdjacentHTML(
  "afterend",
  `<p>Об'єктна модель документа (Document Object Model)</p>`
);

// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку
// const newTitle = document.createElement("h3");
// newTitle.textContent = "Властивість innerHTML";
// const newParah = document.createElement("p");
// newParah.textContent =
//   "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу";
// const newLiElem = document.createElement("li");
// newLiElem.append(newTitle, newParah);
// showList.append(newLiElem);

// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
const markaUp = `<li>
<h3>Властивість innerHTML</h3>
<p>Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу</p></li>`;
showList.insertAdjacentHTML("beforeend", markaUp);
// 20 - очисти список
showList.innerHTML = "";

// insertAdjacentHTML
// Вставка вмісту: insertAdjacentHTML вставляє HTML-код у вказану позицію відносно елемента, не замінюючи його вміст.
// Позиція вставки: Має чотири можливі позиції для вставки:
// 'beforebegin': Перед елементом.
// 'afterbegin': Всередині елемента, перед його вмістом.
// 'beforeend': Всередині елемента, після його вмісту.
// 'afterend': Після елемента.
// Використовується, коли потрібно вставити HTML-код у конкретне місце відносно елемента, не заміняючи його вміст.
