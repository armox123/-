"use strict";
const acordion_items = document.querySelectorAll(".accordion-item");
let acordion_show_item = document.querySelector(".accordion-item._show");

for (const elem of acordion_items) {
    elem.addEventListener("click", function(){
        acordion_show_item.classList.remove('_show');
        elem.classList.add("_show");
        
        const oldImg = acordion_show_item.querySelector(".accordion-btn img");
        oldImg.src = "./assets/+.svg";

        acordion_show_item = elem;
        const img = elem.querySelector(".accordion-btn img");
        if (elem.classList.contains("_show")){
            img.src = "./assets/-.svg";
        }
        else{
            img.src = "./assets/+.svg";
        }
    });
}