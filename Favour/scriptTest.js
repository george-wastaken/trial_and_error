const scrollLeftButton = document.querySelector('.scroll-left');
const scrollRightButton = document.querySelector('.scroll-right');
const sliderContainer = document.querySelector('.profile-list');

scrollLeftButton.addEventListener('click', () => {
  sliderContainer.classList.add('active'); // Add active class for slide animation
  setTimeout(() => {
    sliderContainer.classList.remove('active'); // Remove active class after animation
  }, 500); // Adjust timeout for animation duration (0.5s in CSS)
});

scrollRightButton.addEventListener('click', () => {
  sliderContainer.classList.add('active');
  setTimeout(() => {
    sliderContainer.classList.remove('active');
  }, 500);
});
