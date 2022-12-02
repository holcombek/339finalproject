var navs = document.querySelectorAll('.nav_item')
    for (let i=0; i < navs.length; i++){
        console.log(navs[i].href, window.location.href)
        if (navs[i].href === window.location.href){
            navs[i].setAttribute('class', 'nav_item active')
        }
    }

let button = document.querySelector('#top');
window.onscroll = function() {scrollFunc()};
h1 = document.querySelector('h1')

function scrollFunc(){
    if (document.body.scrollTop > 15 || document.documentElement.scrollTop > 15){
        button.style.display = 'block';
        h1.style.display = 'none'
    }
    else { 
        h1.style.display = 'block';
        button.style.display = 'none'; 
    }
}

function toTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}