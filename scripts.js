// scripts.js

// Toggle between dark and light modes
function toggleTheme() {
    const body = document.body;
    body.classList.toggle("light-mode");
}

// Update grid layout based on the number of streams
function updateGridLayout() {
    const grid = document.querySelector('.grid');
    if (!grid) return;

    const streams = grid.querySelectorAll('.stream');
    if (streams.length === 1) {
        grid.classList.add('single-item');
    } else if (streams.length === 2) {
        grid.classList.add('double-item');
    } else {
        grid.classList.remove('single-item', 'double-item');
    }
}

// Event listener for window resize to adjust grid layout
window.addEventListener('resize', updateGridLayout);

// Initialize the theme and grid layout on page load
document.addEventListener('DOMContentLoaded', () => {
    updateGridLayout();
    // If you want to set a default theme or save user preferences, add logic here
});

// Example of a toggle button in HTML:
// <button class="toggle" onclick="toggleTheme()">Toggle Theme</button>
