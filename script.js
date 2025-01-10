// Function to add fade-in class when element comes into view
function checkFadeIn() {
    const elements = document.querySelectorAll('.fade-in');
    
    elements.forEach(function(element) {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        // Trigger when 75% of the element is in view
        if (rect.top <= windowHeight * 0.75) {
            element.classList.add('visible');
        }
    });
}
window.addEventListener('scroll', checkFadeIn);
document.addEventListener("DOMContentLoaded", checkFadeIn);

// Listen for scroll events to change the navbar's background color
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Offset scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        const navbarHeight = document.querySelector('.navbar').offsetHeight;

        window.scrollTo({
            top: targetElement.offsetTop - navbarHeight,
            behavior: 'smooth'
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar");
    const frame = document.querySelector(".frame");
    const frameTopOffset = frame.offsetTop;

    window.addEventListener("scroll", () => {
        if (window.scrollY >= frameTopOffset) {
            navbar.classList.add("fixed"); // Navbar sticks to the top
        } else {
            navbar.classList.remove("fixed"); // Navbar returns to the frame
        }
    });
});

function validateContactForm() {
    // Check if either email or phone is provided
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;

    if (!email && !phone) {
        alert("Please provide at least one contact method: Email or Phone.");
        return false; // Prevent form submission
    }
    return true; // Allow form submission
}
