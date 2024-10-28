function animateCounter(id, endValue, duration) {
    let startValue = 0;
    const element = document.getElementById(id);
    const increment = endValue / (duration / 16); 
    
    function updateCounter() {
      startValue += increment;
      element.innerText = Math.floor(startValue);
      if (startValue < endValue) {
        requestAnimationFrame(updateCounter);
      } else {
        element.innerText = endValue; 
      }
    }
    
    requestAnimationFrame(updateCounter);
  }

document.addEventListener("DOMContentLoaded", () => {
    const impactSection = document.querySelector(".container.my-5.text-center"); 
    
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateCounter("counter-subscribers", 1500, 2000); 
            animateCounter("counter-partners", 30, 2000);       
            animateCounter("counter-plants", 7500, 2000);       
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 } 
    );
    observer.observe(impactSection); 
  });
