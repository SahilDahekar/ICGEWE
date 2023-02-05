const menu = document.querySelector('#menu-btn');
const nav = document.querySelector('.nav');
const links = document.querySelectorAll('.nav-link');

    menu.addEventListener('click', () => {
        menu.classList.toggle('fa-xmark');
        nav.classList.toggle('active');
    });


    links.forEach(l => {
      l.addEventListener('click', () => {
        nav.classList.remove('active');
        menu.classList.toggle('fa-xmark');
      })
    });