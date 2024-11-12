const contactForm = document.getElementById('contactForm');


contactForm.addEventListener('submit', function (e) {
  
  e.preventDefault();

  
  const name = document.querySelector('input[name="name"]').value.trim();
  const email = document.querySelector('input[name="email"]').value.trim();
  const phone = document.querySelector('input[name="phone"]').value.trim();
  const message = document.querySelector('textarea[name="message"]').value.trim();

  
  if (!validateForm(name, email, phone, message)) {
    alert('Please fill in all fields correctly.');
    return;
  }

  
  alert('Form submitted successfully!');

  
  contactForm.reset();
});


function validateForm(name, email, phone, message) {
  
  if (!name || !email || !phone || !message) {
    return false;
  }

  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Please enter a valid email.');
    return false;
  }

  
  const phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(phone)) {
    alert('Please enter a valid 10-digit phone number.');
    return false;
  }

  return true;
}
