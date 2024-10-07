function playCurrentVideo() {
    /*
    const activeIframe = document.querySelector('.carousel-item.active iframe');
    const inactiveIframes = document.querySelectorAll('.carousel-item:not(.active) iframe');

    activeIframe.src = activeIframe.src.replace("autoplay=false", "autplay=true")

    inactiveIframes.forEach(iframe => {
        iframe.src = iframe.src.replace("autoplay=true", "autoplay=false");
    });
    */
   console.log("hello!")
}

// Handle slide change
document.querySelector('#carouselExampleControls').addEventListener('click', playCurrentVideo);
