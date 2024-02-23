
let currentDate = new Date();

let birthday = prompt("Введите дату рождения в формате ГГГГ-ММ-ДД");
let birthDate = new Date(birthday);

let ageDifference = currentDate.getFullYear() - birthDate.getFullYear();

if (currentDate.getMonth() < birthDate.getMonth() || (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate()))
 {
  ageDifference--;
}

console.log("Возраст: " + ageDifference + " лет");