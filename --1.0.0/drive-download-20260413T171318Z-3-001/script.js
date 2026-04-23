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

const track = document.querySelector('.testimonials-track');
const items = document.querySelectorAll('.testimonial-item');
const dots = document.querySelectorAll('.dot');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

let index = 0;

function update() {
  const itemWidth = items[0].offsetWidth + 30; // ширина + gap
  const centerOffset = (track.parentElement.offsetWidth - items[0].offsetWidth) / 2;
  
  // Сдвиг: положение карточки минус отступ для центрирования
  track.style.transform = `translateX(${-index * itemWidth + centerOffset}px)`;

  items.forEach((it, i) => it.classList.toggle('active', i === index));
  dots.forEach((d, i) => d.classList.toggle('active', i === index));
}

nextBtn.onclick = () => {
  if (index < items.length - 1) index++;
  update();
};

prevBtn.onclick = () => {
  if (index > 0) index--;
  update();
};

// Пересчет при загрузке
window.onload = update;