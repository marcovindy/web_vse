const burger = document.querySelector(".burger-menu");
burger.addEventListener("click",toggleMenu);

function toggleMenu(){
    const h = document.querySelector(".nav-menu.hide");
    const s = document.querySelector(".nav-menu.show");

    if(h){
        showMore();
    }else if(s){
       showLess();
    }
    
    function showMore(){
        document.querySelector(".nav-menu").classList.add("show");
        document.querySelector(".nav-menu").classList.remove("hide");
        document.querySelector(".logo-column").style.display = 'none';
        document.querySelector("header").classList.add("black");
        document.querySelector(".burger-menu").classList.add("opened");
    }
    
    function showLess(){
        document.querySelector(".nav-menu").classList.add("hide");
        document.querySelector(".nav-menu").classList.remove("show");
        document.querySelector(".logo-column").style.display = 'block';
        document.querySelector("header").classList.remove("black");
        document.querySelector(".burger-menu").classList.remove("opened");
    }
}
