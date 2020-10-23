const home = document.querySelector('#home');
const about = document.querySelector('#about');
const beaches = document.querySelector('#beaches');
const diveSites = document.querySelector('#diveSites');
const links = document.querySelectorAll('.nav-item');
const navList = document.querySelector('#navList')

addActive();
  
// }
function addActive(){
  links.forEach(link => {
    link.addEventListener('click', function(){
        links.forEach(item => item.classList.remove('active'));
        this.classList.add('active');
    });
  });
}
