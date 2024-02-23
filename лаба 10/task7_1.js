let array1 = [12, 23, 9];
let array2 = new Array("abc", "bd", "c", "df");
let array3 = Array.of(11, 23, 222, 98);
let combinedArray = [...array1, ...array2, ...array3];

// Ввод числа Х с клавиатуры
let X = prompt("Введите число Х:");

// Проверка введенного числа Х на корректность
if (!isNaN(X) && Number.isInteger(Number(X)) && Number(X) > 0) {
  // Преобразование Х к типу Number
  X = Number(X);

  // Проверка, если Х больше длины массива, то возвращаем весь массив
  if (X >= combinedArray.length) {
    let fragment = combinedArray;
    output = `${fragment}`;
    document.getElementById('output').innerHTML = output ;
  } else {
    // Получение фрагмента массива, содержащего первые х элементов
    let fragment = combinedArray.slice(0,X);
    output = `${fragment}`;
    document.getElementById('output').innerHTML = output ;

    
  }
} else {
  document.getElementById('output').innerHTML ="Ошибка ввода числа Х!";
}
