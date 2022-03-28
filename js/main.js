const modalWindow = document.querySelector('.modal');
const buttonMOdals = document.querySelectorAll('.modal-button');
const modalClose = document.querySelector('.modal-close');
const body = document.querySelector('body');

buttonMOdals.forEach((item) => {
    item.addEventListener('click', () => {
        modalWindow.style.display = 'flex';
        body.classList.add('no-scroll');
    });
});

modalWindow.addEventListener('click', (e) => {
    const isModal = e.target.closest('.modal-inner');

    if(!isModal) {
        modalWindow.style.display = 'none';
        body.classList.remove('no-scroll');
    }
})

modalClose.addEventListener('click', () => {
    modalWindow.style.display = 'none';
    body.classList.remove('no-scroll');
})