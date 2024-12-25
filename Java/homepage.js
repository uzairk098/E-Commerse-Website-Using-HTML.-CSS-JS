// Toggle Menu Functionality
function toggleMenu() {
    document.querySelector('.menu').classList.toggle('active');
}

// Slider Functionality
let currentSlide = 0;

// Select slides and slider container
const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');
const totalSlides = slides.length;

// Function to navigate to the next slide
const nextSlide = () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSliderPosition();
};

// Function to navigate to the previous slide
const prevSlide = () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSliderPosition();
};

// Update the slider position based on the current slide
const updateSliderPosition = () => {
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    slider.style.transition = 'transform 0.5s ease';
};

// Add Event Listeners for Slider Navigation
document.querySelector('.slider-container').addEventListener('click', (event) => {
    if (event.target.classList.contains('prev')) {
        prevSlide();
    } else if (event.target.classList.contains('next')) {
        nextSlide();
    }
});

// Automatically move the slider every 3 seconds
let autoSlideInterval = setInterval(nextSlide, 3000);

// Pause slider on hover
const sliderContainer = document.querySelector('.slider-container');
sliderContainer.addEventListener('mouseover', () => clearInterval(autoSlideInterval));
sliderContainer.addEventListener('mouseout', () => {
    autoSlideInterval = setInterval(nextSlide, 3000);
});

// Optional: Search bar functionality (if needed)
document.querySelector('.search-bar').addEventListener('input', (e) => {
    console.log(`Searching for: ${e.target.value}`);
});
