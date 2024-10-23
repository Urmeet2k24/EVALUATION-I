
      document.getElementById("contactForm").addEventListener("submit", function (event) {
    
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const phone = document.querySelector('input[name="phone"]').value;
    
    
    if (name === "" || email === "" || phone === "") {
      alert("Please fill out all required fields.");
      event.preventDefault(); 
    }
  });
    