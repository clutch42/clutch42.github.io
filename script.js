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
