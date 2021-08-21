const slide = document.querySelector('.slide');
const bar = document.querySelector('#bar');
const close = document.querySelector('.fa-times');
const closeclass = document.querySelector('.close')

bar.addEventListener('click', (e) => {
    slide.classList.toggle('hidden')
});
close.addEventListener('click', (e) => {
    slide.classList.add('hidden')
});
closeclass.addEventListener('click', () => {
    slide.classList.add('hidden')
})