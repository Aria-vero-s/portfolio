const toggleButton = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

toggleButton.addEventListener('click', () => {
  navLinks.classList.toggle('active');

  if (navLinks.classList.contains('active')) {
    toggleButton.style.backgroundImage = "var(--close-icon)";
  } else {
    toggleButton.style.backgroundImage = "var(--menu-icon)";
  }
});

// Set initial button background
toggleButton.style.background = "var(--menu-icon) no-repeat center/contain";