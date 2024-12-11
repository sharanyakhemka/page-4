const lettersContainer = document.getElementById('lettersContainer');

// Function to display letters
function displayLetters() {
    lettersContainer.innerHTML = ''; // Clear previous content
    const letters = JSON.parse(localStorage.getItem('letters')) || [];
    letters.forEach((letterText, index) => {
        const letter = document.createElement('div');
        letter.className = 'letter';
        letter.textContent = letterText;

        // Apply random rotation and position offsets
        const rotation = `${Math.random() * 10 - 5}deg`; // Random rotation
        const xOffset = `${Math.random() * 20 - 10}px`;  // Horizontal offset
        const yOffset = `${Math.random() * 10 - 5}px`;   // Vertical offset
        const zIndex = index; // Stack order

        // Set CSS variables
        letter.style.setProperty('--rotation', rotation);
        letter.style.setProperty('--x-offset', xOffset);
        letter.style.setProperty('--y-offset', yOffset);
        letter.style.setProperty('--z-index', zIndex);

        lettersContainer.appendChild(letter);
    });
}

// Listen for changes in localStorage
window.addEventListener('storage', () => {
    displayLetters();
});

// Initial render
displayLetters();
