

//navbar-search 돋보기 이동
function controll_navbar_search(){
    const navbar_input = document.querySelector('.nav-search input');
    const navbar_search_icon = document.querySelector('.search-icon');
    navbar_input.addEventListener('focus',() =>{
        navbar_search_icon.classList.add('search-focused');
    });
    navbar_input.addEventListener('blur', ()=>{
        navbar_search_icon.classList.remove('search-focused');
    });
}

function init(){
    controll_navbar_search();

}


init();