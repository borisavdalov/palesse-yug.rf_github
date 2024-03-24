const carousel = document.querySelector('.carousel');
console.log(carousel)
const dragging = (e) => {
    carousel.scrollLeft = e.pageX
}

carousel.addEventListener('mousemove', dragging)