document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Check if email already exists
    if (localStorage.getItem(email)) {
        alert('Email already exists! Please use another email or log in.');
        return;
    }

    // Save user data in localStorage
    const user = { name, email, password };
    localStorage.setItem(email, JSON.stringify(user));
    alert('Sign-up successful! You can now log in.');
    window.location.href = 'login.html';
});
