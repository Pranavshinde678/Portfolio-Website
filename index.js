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
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // remove if animation only once
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    document.querySelectorAll(".fade-in").forEach(el => {
      observer.observe(el);
    });
  });

