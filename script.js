window.addEventListener('scroll', function() {
    var element = document.getElementById('about');
    var position = element.getBoundingClientRect();

    // checking whether partially visible
    if(position.top < window.innerHeight && position.bottom >= 0) {
        element.classList.add('active');
    }
});