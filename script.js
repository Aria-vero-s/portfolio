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

    // Updating prices based on the selected currency

document.addEventListener('DOMContentLoaded', () => {
    // Hardcoded exchange rates
    const exchangeRates = {
      "CAD": 1.45,
      "GBP": 0.85
    };

    function updatePrices(currency) {
      try {
        const priceElements = document.querySelectorAll('.price');
  
        priceElements.forEach(priceElement => {
          const minEuro = parseFloat(priceElement.getAttribute('data-min-euro'));
          const maxEuro = parseFloat(priceElement.getAttribute('data-max-euro'));
          
          let minPrice = minEuro, maxPrice = maxEuro;
  
          if (currency === 'CAD') {
            minPrice = (minEuro * exchangeRates.CAD).toFixed(2);
            maxPrice = (maxEuro * exchangeRates.CAD).toFixed(2);
          } else if (currency === 'GBP') {
            minPrice = (minEuro * exchangeRates.GBP).toFixed(2);
            maxPrice = (maxEuro * exchangeRates.GBP).toFixed(2);
          }
  
          priceElement.textContent = 
            currency === 'EUR' ? `€${minEuro} - €${maxEuro}` : 
            currency === 'CAD' ? `C$${minPrice} - C$${maxPrice}` : 
            `£${minPrice} - £${maxPrice}`;
        });
      } catch (error) {
        console.error('Error updating prices:', error);
      }
    }

    const currencyItems = document.querySelectorAll('.currency-item');
    currencyItems.forEach(item => {
      item.addEventListener('click', (event) => {
        event.preventDefault();
        const selectedCurrency = event.target.dataset.currency;
        updatePrices(selectedCurrency);
      });
    });
    updatePrices('EUR');
});
