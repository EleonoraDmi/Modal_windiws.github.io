const btnModal1 = document.getElementById('btn1');
const btnModal2 = document.getElementById('btn2');
const btnModal3 = document.getElementById('btn3');

const modalWindow = document.querySelector('.hidden');

btnModal1.addEventListener('click', () => {
    modalWindow.classList.remove('hidden');
    modalWindow.classList.add('visible');
    modalWindow.innerHTML = 'This is the modal window nr. 1<br>(click on me to close)';
});

btnModal2.addEventListener('click', () => {
    modalWindow.classList.remove('hidden');
    modalWindow.classList.add('visible');
    modalWindow.innerHTML = 'This is the modal window nr. 2<br>(click on me to close)';
});

btnModal3.addEventListener('click', () => {
    modalWindow.classList.remove('hidden');
    modalWindow.classList.add('visible');
    modalWindow.innerHTML = 'This is the modal window nr. 3<br>(click on me to close)';
});

modalWindow.addEventListener('click', () => {
    modalWindow.classList.remove('visible');
    modalWindow.classList.add('hidden');
})