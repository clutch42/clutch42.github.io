document.addEventListener('DOMContentLoaded', function () {
    const titleBanner = document.querySelector('.title-banner');
    const navbar = document.querySelector('.nav-container');
    const titleBannerHeight = titleBanner.offsetHeight;

    window.addEventListener('scroll', function () {
        if (window.scrollY > titleBannerHeight) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }
    });
});
