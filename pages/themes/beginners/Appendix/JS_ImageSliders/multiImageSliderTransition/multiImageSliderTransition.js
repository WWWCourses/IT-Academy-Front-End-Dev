// DOM cache
let sliderItems = document.querySelector('.sliderItems').children;
let commentList = document.querySelector('.commentList');
let btnPrev = document.querySelector('.btnPrev');
let btnNext = document.querySelector('.btnNext');



function hideAllSlides(sliderItems) {
    for (let i = 0; i < sliderItems.length; i++) {
        const item = sliderItems[i];
        item.style.display = 'none';

    }
};
function showSlide(sliderItems, num) {
    hideAllSlides(sliderItems);
    sliderItems[num-1].style.display = 'block';
    console.log(`Slide ${num} shown!`)
}

commentList.addEventListener('click', function (event) {
    if(event.target.tagName === 'LI'){
        let commment = event.target;
        let showSlideNumber = commment.dataset.showSlide;

        showSlide(sliderItems, showSlideNumber);
    }
})

showSlide(sliderItems, 1);