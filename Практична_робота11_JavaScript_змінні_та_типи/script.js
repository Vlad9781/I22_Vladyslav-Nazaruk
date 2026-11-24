"use strict";

// Завдання 1. Підключення JavaScript
console.log("JavaScript успішно підключено!");

// Завдання 2. Створення змінних різних типів
console.log("\nЗавдання 2. Змінні та типи даних");
const studentName = "Студент"; // Замініть на своє ім'я
let age = 16;
let averageGrade = 9.5; // Замініть на свій середній бал
let isStudent = true;
let unknownValue;
let emptyValue = null;
const bigNumber = 9007199254740993n;
const uniqueId = Symbol("id");

console.log("Ім'я:", studentName, typeof studentName);
console.log("Вік:", age, typeof age);
console.log("Середній бал:", averageGrade, typeof averageGrade);
console.log("Статус студента:", isStudent, typeof isStudent);
console.log("Без значення:", unknownValue, typeof unknownValue);
console.log("Порожнє значення:", emptyValue, typeof emptyValue);
console.log("Велике ціле число:", bigNumber, typeof bigNumber);
console.log("Ідентифікатор:", uniqueId, typeof uniqueId);

// Завдання 3. Перетворення типів даних
console.log("\nЗавдання 3. Перетворення типів");
function showConversion(original, result) {
    console.log("Початкове:", original, "Тип:", typeof original,
        "→ Результат:", result, "Тип:", typeof result);
}

showConversion("125", Number("125"));
showConversion("15.75", Number("15.75"));
showConversion(250, String(250));
showConversion(true, String(true));
showConversion("false", Boolean("false")); // Непорожній рядок дає true
showConversion(0, Boolean(0));
showConversion(1, Boolean(1));
showConversion(null, Number(null));
showConversion("45px", parseInt("45px", 10));
showConversion("12.5kg", parseFloat("12.5kg"));

// Завдання 4. Арифметичні операції
console.log("\nЗавдання 4. Арифметичні операції");
const first = "25";
const second = "5";
const a = Number(first);
const b = Number(second);

console.log("Сума:", a + b);
console.log("Різниця:", a - b);
console.log("Добуток:", a * b);
console.log("Без перетворення:", first + second);
// Результат "255": оператор + об'єднує два рядки (конкатенація).

// Завдання 5. Дослідження перетворення типів
console.log("\nЗавдання 5. Дослідження перетворення типів");
// Очікувані результати та пояснення записані перед кожною перевіркою.

// Очікується NaN (number): текст не можна перетворити на число.
console.log('Number("hello"):', Number("hello"));

// Очікується 0 (number): порожній рядок перетворюється на нуль.
console.log('Number(""):', Number(""));

// Очікується true (boolean): рядок "0" непорожній.
console.log('Boolean("0"):', Boolean("0"));

// Очікується false (boolean): порожній рядок є хибним значенням.
console.log('Boolean(""):', Boolean(""));

// Очікується "null" (string): значення null перетворюється на текст.
console.log("String(null):", String(null), typeof String(null));

// Очікується "105" (string): + виконує конкатенацію з рядком.
console.log('"10" + 5:', "10" + 5, typeof ("10" + 5));

// Очікується 5 (number): - перетворює рядок на число.
console.log('"10" - 5:', "10" - 5, typeof ("10" - 5));

// Очікується "object" (string): історична особливість оператора typeof.
// Саме значення null є примітивом, а не об'єктом.
console.log("typeof null:", typeof null);
