// Highlight active nav link
document.querySelectorAll(".nav-link").forEach((link) => {
  if (link.href === window.location.href) {
    link.classList.add("active");
    link.setAttribute("aria-current", "page");
  }
});

// Enable horizontal scrolling with mouse wheel on desktop
const flexContainer = document.querySelector('.flex');

if (flexContainer) {
  const handleWheel = (event) => {
    event.preventDefault();
    flexContainer.scrollLeft += event.deltaY;
  };

  const mediaQuery = window.matchMedia('(min-width: 769px)');

  const updateWheelListener = () => {
    flexContainer.removeEventListener('wheel', handleWheel);

    if (mediaQuery.matches) {
      flexContainer.addEventListener('wheel', handleWheel, { passive: false });
    }
  };

  updateWheelListener();
  mediaQuery.addEventListener('change', updateWheelListener);
}


// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuToggle.classList.toggle('is-open', isOpen);
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  //close after clicking a link
  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuToggle.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Glitch effect on h1 elements
const glitchElements = document.querySelectorAll('h1');
glitchElements.forEach((element) => {
  element.classList.add('glitch-effect');
});

// netlify button fix
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
  ctaButton.addEventListener('click', () => {
    window.location.href = 'products.html';
  });
}

// Replace logo text with an image using JavaScript because I don't want to change it in multiple pages 
const logoList = document.querySelector('ul.logo');
if (logoList) {
  const existingItem = logoList.querySelector('li');
  const newItem = document.createElement('li');
  const logoImage = new Image();
  logoImage.src = 'assets/logo.png';
  logoImage.alt = 'Company Logo';
  logoImage.className = 'logo-image';
  newItem.appendChild(logoImage);

  if (existingItem) {
    logoList.replaceChild(newItem, existingItem);
  } else {
    logoList.appendChild(newItem);
  }
}