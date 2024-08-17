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

document.querySelectorAll('.navbar-list2 a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor click behavior
        const targetId = this.getAttribute('href').substring(1); // Get target ID
        const targetElement = document.getElementById(targetId); // Find target element

        if (targetElement) {
            //const primaryNavbarHeight = document.querySelector('.navbar').offsetHeight || 0; // Height of primary navbar
            const secondaryNavbarHeight = document.querySelector('.navbar-list2').offsetHeight || 0; // Height of secondary navbar
            const totalNavbarHeight = primaryNavbarHeight + secondaryNavbarHeight; // Total height to offset

            // Smooth scrolling to the target element
            window.scrollTo({
                top: targetElement.offsetTop - totalNavbarHeight,
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
