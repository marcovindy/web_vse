const element = document.querySelector("#show-more-gallery");
element.addEventListener("click",toggleState);

function toggleState(){
    const h = document.querySelector(".gallery-more.hide");
    const s = document.querySelector(".gallery-more.show");

    if(h){
        showMore();
    }else if(s){
       showLess();
    }
    
    function showMore(){
        document.querySelector(".gallery-more").classList.add("show");
        document.querySelector(".gallery-more").classList.remove("hide");
        document.querySelector("#show-more-gallery").innerHTML = "Zobrazit méně";
    }
    
    function showLess(){
        document.querySelector(".gallery-more").classList.add("hide");
        document.querySelector(".gallery-more").classList.remove("show");
        document.querySelector("#show-more-gallery").innerHTML = "Zobrazit více";
    }
}
