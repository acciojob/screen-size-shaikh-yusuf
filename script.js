//your JS code here. If required.
function updateSize() {
    // Get the width and height of the window
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Update the content of the h1 tag
    const sizeText = document.getElementById('sizeText');
    sizeText.textContent = `Width: ${width} Height: ${height}`;
  }

  // Initial call to set the initial size
  updateSize();

  // Add an event listener for window resize
  window.addEventListener('resize', updateSize);