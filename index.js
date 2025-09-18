document.addEventListener("DOMContentLoaded", function() {
  const textElement = document.getElementById('animated-text');
  const phrases = [ "Problem Solver","Web Developer","Football Enthusiast"];
  let phraseIndex = 0;
  let letterIndex = 0;
  
  function typePhrase() {
    const currentPhrase = phrases[phraseIndex];
    if (letterIndex < currentPhrase.length) {
      textElement.innerHTML += currentPhrase.charAt(letterIndex);
      letterIndex++;
      setTimeout(typePhrase, 100); 
    } else {
      setTimeout(deletePhrase, 2000);
    }
  }
  
  function deletePhrase() {
    const currentPhrase = phrases[phraseIndex];
    if (letterIndex > 0) {
      textElement.innerHTML = currentPhrase.substring(0, letterIndex - 1);
      letterIndex--;
      setTimeout(deletePhrase, 50); 
    } else {
      phraseIndex = (phraseIndex + 1) % phrases.length;
      setTimeout(typePhrase, 500); 
    }
  }

  typePhrase();
});
document.addEventListener("DOMContentLoaded", () => {
  const preloader = document.getElementById("preloader");

  // Check if the user has already visited index.html in this session
  if (!sessionStorage.getItem("preloaderShown")) {
    // Show preloader
    setTimeout(() => {
      document.body.classList.add("loaded");
      preloader.style.opacity = "0";

      setTimeout(() => {
        preloader.style.display = "none";
      }, 800);
    }, 2000); // Matches bounce animation duration

    // Mark preloader as shown
    sessionStorage.setItem("preloaderShown", "true");
  } else {
    // Skip preloader
    document.body.classList.add("loaded");
    preloader.style.display = "none";
  }
});



  function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
  }
