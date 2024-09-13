let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let caroselDOM = document.querySelector(".carosel-container");
let sliderDOM = caroselDOM.querySelector(".carosel-container .carosel-list");
let boxDOM = document.querySelector(".carosel-container .carosel-box");
let boxItemsDOM = boxDOM.querySelectorAll(".box-item");
let timeDOM = document.querySelector(".carosel-container .carosel-time");

boxDOM.appendChild(boxItemsDOM[0]);
let timeRunning = 3000;
let timeAutoNext = 7000;

nextDom.onclick = function(){
    nextSlider('next');    
}

prevDom.onclick = function(){
    nextSlider('prev');    
}

let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)

function nextSlider(type) {
    let sliderItemsDOM = sliderDOM.querySelectorAll(".carosel-container .carosel-list .carosel-item");
    let boxItemsDOM = document.querySelectorAll(".carosel-container .carosel-box .box-item");

    if(type === "next") {
        sliderDOM.appendChild(sliderItemsDOM[0]);
        boxDOM.appendChild(boxItemsDOM[0]);
        caroselDOM.classList.add("next");
    } else {
        sliderDOM.prepend(sliderItemsDOM[sliderItemsDOM.length - 1]);
        boxDOM.prepend(boxItemsDOM[boxItemsDOM.length - 1]);
        caroselDOM.classList.add("prev");
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        caroselDOM.classList.remove("next");
        caroselDOM.classList.remove("prev");
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        nextDom.click();
    }, timeAutoNext);  
}

document.addEventListener('DOMContentLoaded', function () {
    let slides = document.querySelectorAll('.slides.fade');
    let slide_index = 0;
  
    function show_slides() {
        slides.forEach(function(slide) {
            slide.classList.remove('active');
        });
  
        slide_index++;
        if (slide_index >= slides.length) {
            slide_index = 0;
        }
  
        slides[slide_index].classList.add('active');
    }
    show_slides();
    setInterval(show_slides, 5000); 
});  



document.querySelectorAll('input[name="radio"]').forEach((radioButton) => {
    radioButton.addEventListener('change', function () {
        const selectedValue = this.value;

        // Hide all sections first
        document.getElementById('aboutContent').style.display = 'none';
        document.getElementById('accomplishmentContent').style.display = 'none';
        document.getElementById('skillContent').style.display = 'none';

        // Show the selected section
        if (selectedValue === 'about') {
            document.getElementById('aboutContent').style.display = 'grid';
        } else if (selectedValue === 'accomplishments') {
            document.getElementById('accomplishmentContent').style.display = 'grid';
        } else if (selectedValue === 'skills') {
            document.getElementById('skillContent').style.display = 'grid';
        }
    });
});
