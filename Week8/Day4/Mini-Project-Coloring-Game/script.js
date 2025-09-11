// Get the canvas and palette elements from the DOM
const canvas = document.getElementById('canvas');
const palette = document.getElementById('palette');

// Default selected color for drawing
let selectedColor = '#000';

// Flag to track whether the mouse is currently drawing
let isDrawing = false;

// Calculate the number of columns and rows based on window size
const cols = Math.floor(window.innerWidth / 21); // 20px pixel + 1px gap
const rows = Math.floor(window.innerHeight / 21);

// Handle color selection from the palette
palette.querySelectorAll('.color').forEach(colorDiv => {
  colorDiv.addEventListener('click', () => {
    // Get the background color of the clicked palette item
    selectedColor = window.getComputedStyle(colorDiv).backgroundColor;
  });
});

// Create pixel grid
for (let i = 0; i < cols * rows; i++) {
  const pixel = document.createElement('div');
  pixel.classList.add('pixel');

  // Start drawing on mouse down
  pixel.addEventListener('mousedown', () => {
    pixel.style.backgroundColor = selectedColor;
    isDrawing = true;
  });

  // Continue drawing when mouse enters pixel while mouse is pressed
  pixel.addEventListener('mouseenter', () => {
    if (isDrawing) {
      pixel.style.backgroundColor = selectedColor;
    }
  });

  // Add pixel to the canvas
  canvas.appendChild(pixel);
}

// Stop drawing when mouse button is released
document.addEventListener('mouseup', () => {
  isDrawing = false;
});

// Clear all pixels when the "clear" button is clicked
document.getElementById('clear').addEventListener('click', () => {
  const pixels = document.querySelectorAll('.pixel');
  pixels.forEach(pixel => {
    pixel.style.backgroundColor = 'white'; // Reset to default color
  });
});