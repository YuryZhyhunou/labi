document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let resultDiv = document.getElementById('result');
    let radioValue = [...document.querySelectorAll('input[name="option"]')].find(radio => radio.checked);
    let checkboxes = [...document.querySelectorAll('input[name^="checkbox"]:checked')];
    let dropdown = document.getElementById('dropdown');
    
    if (radioValue || checkboxes.length > 0 || dropdown.value) {
        resultDiv.innerHTML = `
            <p><strong>Результат:</strong></p>
            <p>Переключатель: ${radioValue ? radioValue.value : 'Ничего не выбрано'}</p>
            <p>Флажки: ${checkboxes.length > 0 ? checkboxes.map(checkbox => checkbox.value).join(', ') : 'Ничего не выбрано'}</p>
            <p>Выпадающий список: ${dropdown.value || 'Ничего не выбрано'}</p>
        `;
    } else {
        resultDiv.innerHTML = '<p><strong>Необходимо заполнить все поля!</strong></p>';
    }
});