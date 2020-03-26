const side = document.querySelector('.side');
const btn = document.querySelector('.side__btn');

btn.addEventListener('click',() => {
  side.classList.toggle('active');
  btn.classList.toggle('red');
})
