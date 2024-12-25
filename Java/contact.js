document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
  
    // Form Values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Form Validation
    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
      alert('Please fill in all the fields.');
      return;
    }
  
    // Simulate Sending Message
    alert(`Thank you, ${name}! Your message has been sent.`);
    
    // Clear Form
    document.getElementById('contact-form').reset();
  });
  