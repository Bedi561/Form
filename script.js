const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const Cpassword = document.getElementById("confirm-password");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateInputs();
});

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const CpasswordValue = Cpassword.value.trim();

    // Username validation
    if (usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }

    // Email validation
    if (emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid Email Address');
    } else {
        setSuccess(email);
    }

    // Password validation
    if (passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8) {
        setError(password, 'Password should be at least 8 characters');
    } else {
        setSuccess(password);
    }

    // Confirm password validation
    if (CpasswordValue === '') {
        setError(Cpassword, 'Please confirm your password');
    } else if (CpasswordValue !== passwordValue) {
        setError(Cpassword, "Passwords do not match");
    } else {
        setSuccess(Cpassword);
    }
}

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message; // Set the error message
    inputControl.classList.add('error'); // Add error class
    inputControl.classList.remove('success'); // Remove success class
}

const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = ''; // Clear the error message
    inputControl.classList.add('success'); // Add success class
    inputControl.classList.remove('error'); // Remove error class
}

const isValidEmail = (email) => {
    const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex for valid email
    return reg.test(email);
}
