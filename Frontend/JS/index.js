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