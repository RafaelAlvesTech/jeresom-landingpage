const videoOverlay = document.getElementById('video-overlay');
const openVideoButton = document.getElementById('open-video');

openVideoButton.addEventListener('click', () => {
    videoOverlay.classList.remove('hidden');
});

videoOverlay.addEventListener('click', (event) => {
    if (event.target === videoOverlay) {
        videoOverlay.classList.add('hidden');
    }
});