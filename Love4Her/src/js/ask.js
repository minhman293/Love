const btnHeight = 35;
const btnWidth = 75;

// set the max height and width to make sure btn is visible wherever it moves to
const maxMovingHeight = window.innerHeight - btnHeight;
const maxMovingWidth = window.innerWidth - btnWidth;

window.addEventListener('DOMContentLoaded', () => {
    // get btn-no by class
    const btnNo = document.querySelector('.btn-no');

    // move btn-no when mouseover it
    btnNo.addEventListener('mouseover', () => {
        btnNo.style.left = Math.floor(Math.random() * (maxMovingWidth + 1)) + 'px';
        btnNo.style.top = Math.floor(Math.random() * (maxMovingHeight + 1)) + 'px';
    })
});