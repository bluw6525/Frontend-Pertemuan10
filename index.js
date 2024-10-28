    function showSuccessMessage() {
        document.getElementById('successAlert').classList.remove('d-none');
        const modalElement = document.getElementById('subscribeModal');
        const modal = bootstrap.Modal.getInstance(modalElement);
        modal.hide();

        setTimeout(() => {
        document.getElementById('successAlert').classList.add('d-none');
        }, 3000);
    }

    document.addEventListener("DOMContentLoaded", function() {
        const contactForm = document.getElementById("contactForm");
      
        contactForm.addEventListener("submit", function(event) {      
          const firstname = document.getElementById("firstname").value.trim();
          const email = document.getElementById("email").value.trim();
          const message = document.getElementById("message").value.trim();
          const checkbox = document.getElementById("home-checkbox").checked;

          const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

          if (firstname && emailPattern.test(email) && message && checkbox) {
            contactForm.classList.add("was-validated");
            window.location.href = "https://www.whatsapp.com";
          } else {
            event.preventDefault();
            alert("Please fill out all fields with valid data and agree to the terms before submitting.");
            contactForm.classList.add("was-validated");
          }
        });
      });
      
