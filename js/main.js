document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('gtagContactForm');
  const successMessage = document.getElementById('successMessage');
  const submitBtn = document.getElementById('submitBtn');

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault(); // Prevents browser page reload and redirection

      // Disable button and update text during submission
      submitBtn.disabled = true;
      submitBtn.innerText = 'Sending...';

      const formData = new FormData(contactForm);

      try {
        // Submit form data quietly to Zoho
        await fetch('https://forms.zohopublic.eu/virtualoffice1infogt11/form/GTAGContactForm/formperma/mGD8SjAI0J4uQOaje1HzLvKcP_k4KexQNU4rzhE2pW4/htmlRecords/submit', {
          method: 'POST',
          body: formData,
          mode: 'no-cors' // Allows sending data cross-origin without CORS blocking
        });

        // Show success message and reset form
        successMessage.classList.remove('d-none');
        contactForm.reset();
        
        // Scroll smoothly to success message
        successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });

      } catch (error) {
        alert('There was an error sending your message. Please try again.');
        console.error('Submission error:', error);
      } finally {
        // Reset button state
        submitBtn.disabled = false;
        submitBtn.innerText = 'Send Message';
      }
    });
  }
});

  