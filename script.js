const rainbowHeading = document.getElementById('rainbow-heading');
const resetButton = document.getElementById('resetButton');

resetButton.addEventListener('click', function() {
    // Remove and reapply the rainbow-text class to reset the rainbow effect
    rainbowHeading.classList.remove('rainbow-text');
    void rainbowHeading.offsetWidth; // Trigger reflow to ensure smooth transition
    rainbowHeading.classList.add('rainbow-text');
});
