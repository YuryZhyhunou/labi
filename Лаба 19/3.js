let searchButton = document.getElementById('searchButton');
let multiText = document.getElementById('multiText');
 searchButton.addEventListener('click', function() {
 let textFromField = multiText.value;
  let searchValue = prompt('Введите строку для поиска:');
  if (textFromField.includes(searchValue)) {
      alert('Строка найдена!');
  } else {
     alert('Строка не найдена!');
 }
 });