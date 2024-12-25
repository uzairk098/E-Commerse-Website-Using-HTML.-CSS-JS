document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Check if user exists in localStorage
    const user = JSON.parse(localStorage.getItem(email));
    if (!user) {
        alert('Account not found. Please sign up first.');
        return;
    }

    // Check if password matches
    if (user.password === password) {
        alert(`Welcome back, ${user.name}!`);
        // Redirect to a protected/homepage (optional)
        window.location.href = 'homepage.html';
    } else {
        alert('Incorrect password. Please try again.');
    }
    
});
