document.addEventListener("DOMContentLoaded", function() {
    // Get the current page URL
    var currentPage = window.location.pathname.split("/").pop();

    // Default to 'index.html' if no specific page is found (useful for homepage)
    if (currentPage === '') {
        currentPage = 'index.html';
    }
    
    // Get all navigation links
    var navLinks = document.querySelectorAll(".navbar-item a");
    
    // Loop through the links and add the active class to the matching link
    navLinks.forEach(function(link) {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });
});

document.querySelectorAll('.secondary-navbar-item a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor click behavior
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const navbarHeight = document.querySelector('.secondary-navbar').offsetHeight;
            window.scrollTo({
                top: targetElement.offsetTop - navbarHeight,
                behavior: 'smooth'
            });
        }
    });
});

window.addEventListener('resize', function() {
    document.querySelectorAll('.secondary-navbar-item a').forEach(anchor => {
        anchor.dispatchEvent(new Event('click'));
    });
});
