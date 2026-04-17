// Highlight active nav link
document.querySelectorAll(".nav-link").forEach((link) => {
    if (link.href === window.location.href) {
        link.classList.add("active");
        link.setAttribute("aria-current", "page");
    }
});

// Enable horizontal scrolling with mouse wheel
const flexContainer = document.querySelector('.flex');

flexContainer.addEventListener('wheel', (e) => {
    e.preventDefault();
    flexContainer.scrollLeft += e.deltaY;
});
