let main = document.getElementById('main');
let main2 = document.getElementById('main2');

let next = document.getElementById('next');
next.addEventListener('click', (e) => {
  e.preventDefault();

  main.style.display = 'none';
  main2.style.display = 'flex';

});

let prev = document.getElementById('prev');
prev.addEventListener('click', (e) => {
  e.preventDefault();

  main2.style.display = 'none';
  main.style.display = 'flex';
})