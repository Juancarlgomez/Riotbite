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