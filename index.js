/* FOR MOBILE */

document.addEventListener('DOMContentLoaded', () => {
  const hamburgerButton = document.querySelector('.hamburger-button');
  const mobileMenu = document.querySelector('.mobile-menu');

  hamburgerButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    hamburgerButton.classList.toggle('open');
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('appointmentForm');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  const globalErrorMessage = document.getElementById('form-global-error');

  // Helper function to display an error message for a specific input
  function showError(inputElement, message) {
    const formGroup = inputElement.closest('.form-group');
    formGroup.classList.add('error');
    const errorMessageSpan = formGroup.querySelector('.error-message');
    errorMessageSpan.textContent = message;
  }

  // Helper function to clear an error message for a specific input
  function clearError(inputElement) {
    const formGroup = inputElement.closest('.form-group');
    formGroup.classList.remove('error');
    const errorMessageSpan = formGroup.querySelector('.error-message');
    errorMessageSpan.textContent = '';
  }

  // Helper function to show the global error message
  function showGlobalError() {
    globalErrorMessage.style.display = 'block';
  }

  // Helper function to hide the global error message
  function hideGlobalError() {
    globalErrorMessage.style.display = 'none';
  }

  // Validate Email format
  function isValidEmail(email) {
    // More robust regex for email validation
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      String(email).toLowerCase()
    );
  }

  // Main validation function
  function validateForm() {
    let isValid = true; // Assume valid until an error is found

    // Clear all previous errors first
    clearError(emailInput);
    clearError(messageInput);
    hideGlobalError();

    // Validate Email
    if (emailInput.value.trim() === '') {
      showError(emailInput, 'Email is required');
      isValid = false;
    } else if (!isValidEmail(emailInput.value.trim())) {
      showError(emailInput, 'Please enter a valid email address');
      isValid = false;
    }

    // Validate Message
    if (messageInput.value.trim() === '') {
      showError(messageInput, 'Message is required');
      isValid = false;
    }

    // If any validation failed, show the global error message
    if (!isValid) {
      showGlobalError();
    }

    return isValid;
  }

  // Add event listener for form submission
  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    if (validateForm()) {
      console.log('Form is valid! Submitting data...');
      // In a real application, you would send the form data to a server here:
      // Example using Fetch API:
      /*
          const formData = new FormData(form);
          fetch('/your-api-endpoint', {
              method: 'POST',
              body: formData
          })
          .then(response => response.json())
          .then(data => {
              console.log('Success:', data);
              alert('Appointment confirmed successfully!');
              form.reset(); // Clear the form
              hideGlobalError(); // Hide global error on success
          })
          .catch((error) => {
              console.error('Error:', error);
              alert('There was an error confirming your appointment. Please try again.');
              showGlobalError(); // Show global error on submission failure
          });
          */
      // For demonstration:
      alert('Appointment confirmed! (Form data would be sent now)');
      form.reset(); // Clear the form after successful submission
      hideGlobalError(); // Hide global error on success
    } else {
      console.log('Form validation failed. Please fix the errors.');
    }
  });

  // Real-time validation as user types/interacts (optional but good UX)
  emailInput.addEventListener('input', () => {
    if (
      emailInput.value.trim() !== '' &&
      isValidEmail(emailInput.value.trim())
    ) {
      clearError(emailInput);
    }
    // Re-validate entire form to update global error if needed
    validateForm();
  });

  messageInput.addEventListener('input', () => {
    if (messageInput.value.trim() !== '') {
      clearError(messageInput);
    }
    // Re-validate entire form to update global error if needed
    validateForm();
  });

  // Clear global error message if user starts typing in any field that was previously invalid
  form.querySelectorAll('input, textarea, select').forEach((input) => {
    input.addEventListener('input', () => {
      // Re-validate the form to check if global error can be hidden
      validateForm();
    });
  });
});

// Add this to your existing form-validation.js file,
// ideally at the top or within the DOMContentLoaded listener.

document.addEventListener('DOMContentLoaded', () => {
  // --- Existing Form Validation Code ---
  const form = document.getElementById('appointmentForm');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  const globalErrorMessage = document.getElementById('form-global-error');

  // ... (Your existing showError, clearError, isValidEmail, validateForm functions) ...

  // --- Existing Form Submission and Real-time Validation ---
  form.addEventListener('submit', (event) => {
    // ... (Your existing form submit logic) ...
  });

  emailInput.addEventListener('input', () => {
    // ... (Your existing real-time validation) ...
  });

  messageInput.addEventListener('input', () => {
    // ... (Your existing real-time validation) ...
  });

  form.querySelectorAll('input, textarea, select').forEach((input) => {
    input.addEventListener('input', () => {
      // ... (Your existing real-time validation) ...
    });
  });
});


