// JavaScript code here
const imageElements = document.querySelectorAll('[data-bs-img]');
const modalImage = document.getElementById('modal-image');

imageElements.forEach(element => {
    element.addEventListener('click', (event) => {
        modalImage.src = event.target.getAttribute('data-bs-img');
    });
});

// Main image for modal view
document.getElementById('main-image').addEventListener('click', () => {
    modalImage.src = document.getElementById('main-image').src;
});
