document.addEventListener('DOMContentLoaded', function() {
    document.body.classList.add('loaded');

    const images = document.querySelectorAll('.right-section img');

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function handleScroll() {
        images.forEach(function(image) {
            if (isInViewport(image) && !image.classList.contains('visible')) {
                image.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', handleScroll);

    var video = document.getElementById("video-background");
video.playbackRate = 0.5;
});
