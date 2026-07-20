document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
  
    if (contactForm) {
      contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
  
        const name = encodeURIComponent(document.getElementById('name').value);
        const email = encodeURIComponent(document.getElementById('email').value);
        const role = encodeURIComponent(document.getElementById('role').value);
        const message = encodeURIComponent(document.getElementById('message').value);
  
        const subject = encodeURIComponent(`GTAG Inquiry from ${name} (${role})`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nRole: ${role}\n\nMessage:\n${message}`);
  
        // Open default email client cleanly without security warnings
        window.location.href = `mailto:info@gtag.be?subject=${subject}&body=${body}`;
      });
    }
  });