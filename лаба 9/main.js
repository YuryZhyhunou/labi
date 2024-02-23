//Задание 1
let array1 = [12, 23, 9];
let array2 = new Array("abc", "bd", "c", "df");
let array3 = Array.of(11, 23, 222, 98);
let combinedArray = [...array1, ...array2, ...array3];

//Задание 2

let output = '';

combinedArray.forEach((element, index) => {
    output += `${index} --- ${element} <br>`;

});

document.getElementById('output').innerHTML = output ;

//Задание 3

combinedArray.splice(2, 1); // Удаление одного элемента по индексу 2
combinedArray.unshift(0); // Добавление элемента в начало массива
combinedArray.push(2); // Добавление элемента в конец массива
combinedArray.shift(); // Удаление первого элемента
combinedArray.pop(); // Удаление последнего элемента

//Задание 4

delete combinedArray[2];
delete combinedArray[3];
delete combinedArray[5];

//Задание 5

console.log(`Длина массива: ${combinedArray.length}`); // Длина массива
console.log(`Количество элементов в массиве: ${combinedArray.filter(Boolean).length}`); // Количество инициализированных элементов
combinedArray.forEach((element, index) => { 
if (element) {
console.log(`${index} - ${element}`);
}
}); // Вывод элементов с указанием индекса

//Задание 6

combinedArray = [];
combinedArray.length = 0;