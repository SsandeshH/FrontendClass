const menu_bar=document.querySelector(".menu_bar");
const close=document.querySelector(".close");

menu_bar.addEventListener("click", function(){
    document.querySelector(".element_container").style
    .display="flex";
    close.style.display="block";
    

});

close.addEventListener("click", function(){
    close.style.display="none";
    menu_bar.style.display="block";
});