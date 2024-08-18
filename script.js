// for highlighting active page in nav bar
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

// offset so nav bar doesn't hide top of content
document.querySelectorAll('.navbar-list2 a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor click behavior
        const targetId = this.getAttribute('href').substring(1); // Get target ID
        const targetElement = document.getElementById(targetId); // Find target element

        if (targetElement) {
            // Get the height of the navbar
            const navbarHeight = document.querySelector('.navbar').offsetHeight || 0; 

            // Smooth scrolling to the target element
            window.scrollTo({
                top: targetElement.offsetTop - navbarHeight, // Adjust scroll position
                behavior: 'smooth'
            });
        }
    });
});

// Adjust on window resize if the height of the navbar changes
window.addEventListener('resize', function() {
    document.querySelectorAll('.navbar-list2 a').forEach(anchor => {
        anchor.dispatchEvent(new Event('click'));
    });
});
