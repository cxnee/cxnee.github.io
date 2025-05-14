window.addEventListener('DOMContentLoaded', () => {
  const loader = document.getElementById('loader');
  const mainContent = document.getElementById('main-content');

  // Hide loader and show main content
  loader.classList.add('hidden');
  setTimeout(() => {
    loader.style.display = 'none';
    mainContent.style.display = 'block';
  }, ); // 500ms delay to hide the loader

});


function playSound() {
  const sound = document.getElementById('sfx');
  sound.play().catch(() => {}); // Prevent errors if sound can't play
}



  const introFrame = document.getElementById("intro-frame");
  const mainContent = document.getElementById("main-content");
  const bgMusic = document.getElementById("bg-music");

  introFrame.addEventListener("click", () => {
    // Start music
    bgMusic.play().catch(e => console.warn("Music blocked or failed:", e));
    bgMusic.volume = 0.03;
    // Fade out intro
    introFrame.classList.add("hidden");

    // Show main content after fade
    setTimeout(() => {
      mainContent.style.display = "block";
    }, 800); // match CSS fade time
  });

