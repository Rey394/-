const waveContainer = document.querySelector('.wave-container');

waveContainer.addEventListener('click', function(event) {
    const wave = document.createElement('div');
    wave.classList.add('wave');
    
    const rect = waveContainer.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    wave.style.left = `${x}px`;
    wave.style.top = `${y}px`;
    
    waveContainer.appendChild(wave);
    
    // Remove the wave element after animation completes
    setTimeout(() => {
        wave.remove();
    }, 600);
});
