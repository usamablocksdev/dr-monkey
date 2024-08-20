// Script for navigating between tabs
function navigate(page) {
  document.querySelectorAll(".page").forEach((section) => {
    section.style.display = "none";
  });
  document.getElementById(page).style.display = "block";
}

// Script for auto-rotating slider
let currentSlide = 0;
const slides = [
  "./Images/1.jpg",
  "./Images/2.jpg",
  "./Images/3.jpg",
  "./Images/4.jpg",
  "./Images/5.jpg",
];

function showSlide(index) {
  const slideImage = document.getElementById("slideImage");
  slideImage.src = slides[index];
}

function startAutoSlide() {
  setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }, 2000); // Change slide every 2 seconds
}

// Initial setup
navigate("home"); // Display the home page by default
showSlide(currentSlide); // Show the first slide by default
startAutoSlide(); // Start the auto-rotation of slides
