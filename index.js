document.addEventListener("DOMContentLoaded", function() {
  const textElement = document.getElementById('animated-text');
  const phrases = [ "Student","Web Developer","Football Enthusiast"];
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
  setTimeout(() => {
    document.body.classList.add("loaded");

    const preloader = document.getElementById("preloader");
    preloader.style.opacity = "0";

    setTimeout(() => {
      preloader.style.display = "none";
    }, 800);
  }, 2000); // Matches bounce animation duration
});


  function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
  }
