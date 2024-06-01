window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'linear-gradient(to right, #002244, #0055aa)';
    } else {
        navbar.style.background = 'linear-gradient(to right, #0044cc, #0088ff)';
        navbar.style.background = 'linear-gradient(to left, #0044cc, #0088ff)';

    }
});
