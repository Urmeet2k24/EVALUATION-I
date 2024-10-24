// Get the form element
const contactForm = document.getElementById('contactForm');

// Add an event listener to handle form submission
contactForm.addEventListener('submit', function (e) {
  // Prevent the default form submission
  e.preventDefault();

  // Get form values
  const name = document.querySelector('input[name="name"]').value.trim();
  const email = document.querySelector('input[name="email"]').value.trim();
  const phone = document.querySelector('input[name="phone"]').value.trim();
  const message = document.querySelector('textarea[name="message"]').value.trim();

  // Perform form validation
  if (!validateForm(name, email, phone, message)) {
    alert('Please fill in all fields correctly.');
    return;
  }

  // If validation passes, show a success message
  alert('Form submitted successfully!');

  // Optionally, reset the form
  contactForm.reset();
});

// Form validation function
function validateForm(name, email, phone, message) {
  // Check if any field is empty
  if (!name || !email || !phone || !message) {
    return false;
  }

  // Validate email format using a regular expression
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Please enter a valid email.');
    return false;
  }

  // Validate phone number (optional: adjust regex as needed)
  const phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(phone)) {
    alert('Please enter a valid 10-digit phone number.');
    return false;
  }

  return true;
}
