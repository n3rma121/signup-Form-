const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const passwordError = document.getElementById('password-error');

passwordInput.addEventListener('input', validatePasswordMatch);
confirmPasswordInput.addEventListener('input', validatePasswordMatch);

function validatePasswordMatch() {
  const passwordValue = passwordInput.value;
  const confirmPasswordValue = confirmPasswordInput.value;
  
  // Check if passwords match
  if (passwordValue !== confirmPasswordValue) {
    // Display error message
    passwordError.style.visibility = 'visible';
    passwordError.style.display = 'block'; // Show the error message
    passwordInput.style.borderColor = 'red';
    confirmPasswordInput.style.borderColor = 'red';
  } else {
    // Clear error message
    passwordError.style.visibility = 'hidden';
    passwordError.style.display = 'none'; // Hide the error message
    passwordInput.style.borderColor = ''; // Reset border color
    confirmPasswordInput.style.borderColor = ''; // Reset border color
  }
}
