const moon = document.getElementById('moon');
const stars = document.getElementById('stars');

window.addEventListener('scroll',function(){
    let scrollvalue = this.window.scrollY;
    moon.style.top = scrollvalue + 'px';
    stars.style.left = scrollvalue + 'px';
})