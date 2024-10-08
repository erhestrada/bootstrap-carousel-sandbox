import { getTopClips } from './getTopClips.js';

var clipIndex = 0;
 
 function replaceCarouselItem(increment) {
    const currentClip = document.getElementById("current-clip");
    currentClip.remove();

    const carouselInner = document.querySelector('.carousel-inner');
    
    const newItem = document.createElement('div');
    newItem.className = 'carousel-item iframe-slide active';
    newItem.id = "current-clip";
    
    const flexContainer = document.createElement('div');
    flexContainer.className = 'd-flex justify-content-center align-items-center';
    flexContainer.style.height = '500px';
    
    const iframe = document.createElement('iframe');
    //iframe.src = 'https://clips.twitch.tv/embed?clip=SmoothArbitraryCodTakeNRG-ok-RXU3sW-6RQJ_-&parent=localhost&autoplay=true';
    clipIndex = clipIndex + increment;
    iframe.src = localStorage.getItem(clipIndex) + "&parent=localhost&autoplay=true";
    console.log(clipIndex);
    iframe.height = '360';
    iframe.width = '640';
    iframe.frameBorder = '0';
    iframe.allowFullscreen = true;
    
    flexContainer.appendChild(iframe);
    newItem.appendChild(flexContainer);
    carouselInner.appendChild(newItem);

    // Refresh the carousel to recognize the new item
    const carousel = new bootstrap.Carousel(document.querySelector('#carouselExampleControls'));
}

getTopClips(clientId, authToken, "Just Chatting", 1);
//document.querySelector('#carouselExampleControls').addEventListener('click', replaceCarouselItem);
document.querySelector('.carousel-control-next').addEventListener('click', () => replaceCarouselItem(1));
document.querySelector('.carousel-control-prev').addEventListener('click', () => replaceCarouselItem(-1));

