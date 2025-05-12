window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  const content = document.getElementById('main-content');

  loader.classList.add('hidden');
  setTimeout(() => {
    loader.style.display = 'none';
    content.style.display = 'block';
  }, 500); // Wait for fade-out transition
});

document.addEventListener("DOMContentLoaded", () => {
  const numberOfStars = 50; // You can adjust this to have more or fewer stars
  const body = document.body;

  // Function to generate stars at random positions
  function generateStars() {
    for (let i = 0; i < numberOfStars; i++) {
      const star = document.createElement("div");
      star.classList.add("star");

      // Randomize the size of the stars
      const size = Math.random() * 3 + 1; // Size between 1 and 4px
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;

      // Randomize the initial position of the stars
      const xPosition = Math.random() * window.innerWidth; // Random x position
      const yPosition = Math.random() * window.innerHeight; // Random y position
      star.style.left = `${xPosition}px`;
      star.style.top = `${yPosition}px`;

      // Append the star to the body
      body.appendChild(star);
    }
  }

  // Call the function to generate stars
  generateStars();
});
