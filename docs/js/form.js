$(document).ready(function(){

    // Обозначаем placeholder
    const formItems = document.querySelectorAll('.form-item');
    const formItemsInputs = document.querySelectorAll('.form-item-input');

    // поднимаем placeholder наверх:
    for (let i = 0; i < formItems.length; i++) {

        formItems[i].addEventListener('click', function () {
            const placeholderElement = this.querySelector('.fake-placeholder');
            placeholderElement.classList.add('active-input');
        })
    };

    // уводим курсор с инпута:
    for (let i = 0; i < formItemsInputs.length; i++) {
        formItemsInputs[i].addEventListener('blur', function () {

            const thisParent = this.parentElement;

            if (this.value == '') {
                thisParent.querySelector('span').classList.remove('active-input');
            };
        });
    };
});
