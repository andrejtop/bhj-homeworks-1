document.querySelectorAll('.dropdown').forEach(function(dropDownWrapper) {
    const dropDownBtn = dropDownWrapper.querySelector('.dropdown__value');
    const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
    const dropDownListItems = dropDownWrapper.querySelectorAll('.dropdown__link');

    dropDownBtn.addEventListener('click', function(e) {
        dropDownList.classList.toggle('dropdown__list_active');
        document.querySelectorAll('.dropdown__list').forEach(function(elem) {
            if (elem !== dropDownList) {
                elem.classList.remove('dropdown__list_active');
            }
        });
    });

    dropDownListItems.forEach(function(listItem) {
        listItem.addEventListener('click', function(e) {
            e.preventDefault();
            dropDownBtn.textContent = this.textContent;
            dropDownList.classList.remove('dropdown__list_active');
        });
    });
});

document.addEventListener('click', function(e) {
    if (!e.target.closest('.dropdown')) {
        document.querySelectorAll('.dropdown__list').forEach(function(elem) {
            elem.classList.remove('dropdown__list_active');
        });
    }
});
