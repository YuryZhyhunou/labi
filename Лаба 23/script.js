
$(document).ready(function () {
    const names = [
        'Картинка1', 'Картинка2', 'Картинка3', 'Картинка4',
        'Картинка5', 'Картинка6', 'Картинка7', 'Картинка8',
        'Картинка9', 'Картинка10', 'Картинка11', 'Картинка12'];

    const desc = [
        'Красивое...',
        'Крутая',
        'Видели такое?',
        'Вот это да!',
        'Да уж!',
        'Красивое...',
        'Крутая',
        'Крутая',
        'Да уж!',
        'Ну хотя бы',
        'Мде',
        'Да сколько можно'
    ];

    $('.pic').each(function (i, elem) {
        $('.pic-link').eq(i).attr('data-bs-toggle', 'modal');
        $('.pic-link').eq(i).attr('data-bs-target', `#modal-pic${i + 1}`);
        const content = `<div class="modal fade" id="modal-pic${i + 1}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Это картинка №${i + 1}</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
            </div>
            <div class="modal-body">
                <img src="pics/${i + 1}.jpg" alt="pic${i + 1}">
                <h2>Это ${names[i]}</h2>
                <p>${desc[i]}</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
            </div>
        </div>
    </div>
</div>`;
        $(elem).append(content);
    });
});
