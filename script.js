// ======================
// PART 1: Event Handling
// ======================

// Get DOM elements
const clickMeButton = document.getElementById('clickMe');
const message = document.getElementById('message');
const colorBox = document.getElementById('colorBox');

// 1. Click event
clickMeButton.addEventListener('click', function() {
    message.textContent = 'Button was clicked!';
    message.style.color = '#4CAF50';
    
    // Reset message after 2 seconds
    setTimeout(() => {
        message.textContent = 'Try clicking the button or moving your mouse over it!';
        message.style.color = '';
    }, 2000);
});

// 2. Mouseover and mouseout events
colorBox.addEventListener('mouseover', function() {
    this.style.backgroundColor = '#4CAF50';
    this.style.color = 'white';
});

colorBox.addEventListener('mouseout', function() {
    this.style.backgroundColor = '';
    this.style.color = '';
});

// 3. Keyboard events
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        message.textContent = 'You pressed the Escape key!';
        message.style.color = '#2196F3';
        
        setTimeout(() => {
            message.textContent = 'Try clicking the button or moving your mouse over it!';
            message.style.color = '';
        }, 2000);
    }
});

// ======================
// PART 2: Interactive Elements
// ======================

// 1. Theme Toggle
const themeToggle = document.getElementById('themeToggle');

themeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    
    // Update button text based on current theme
    if (document.body.classList.contains('dark-mode')) {
        themeToggle.textContent = '☀️ Light Mode';
    } else {
        themeToggle.textContent = '🌙 Dark Mode';
    }
});

// 2. Counter
const counterDisplay = document.getElementById('counter');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
let count = 0;

function updateCounter() {
    counterDisplay.textContent = count;
}

incrementBtn.addEventListener('click', function() {
    count++;
    updateCounter();
});

decrementBtn.addEventListener('click', function() {
    count--;
    updateCounter();
});

// 3. FAQ Accordion
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', function() {
        // Toggle the active class on the clicked question
        this.classList.toggle('active');
        
        // Get the answer element
        const answer = this.nextElementSibling;
        
        // Toggle the show class to expand/collapse the answer
        answer.classList.toggle('show');
        
        // Toggle the + and - sign
        const icon = this.querySelector('span');
        icon.textContent = answer.classList.contains('show') ? '−' : '+';
    });
});

// ======================
// PART 3: Form Validation
// ======================
const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const formSuccess = document.getElementById('formSuccess');

// Email validation using regex
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Name validation
function validateName() {
    const name = nameInput.value.trim();
    const nameError = document.getElementById('nameError');
    
    if (name === '') {
        nameError.textContent = 'Name is required';
        nameInput.style.borderColor = '#d32f2f';
        return false;
    } else if (name.length < 2) {
        nameError.textContent = 'Name must be at least 2 characters';
        nameInput.style.borderColor = '#d32f2f';
        return false;
    } else {
        nameError.textContent = '';
        nameInput.style.borderColor = '#4CAF50';
        return true;
    }
}

// Email validation
function validateEmail() {
    const email = emailInput.value.trim();
    const emailError = document.getElementById('emailError');
    
    if (email === '') {
        emailError.textContent = 'Email is required';
        emailInput.style.borderColor = '#d32f2f';
        return false;
    } else if (!isValidEmail(email)) {
        emailError.textContent = 'Please enter a valid email address';
        emailInput.style.borderColor = '#d32f2f';
        return false;
    } else {
        emailError.textContent = '';
        emailInput.style.borderColor = '#4CAF50';
        return true;
    }
}

// Password validation
function validatePassword() {
    const password = passwordInput.value;
    const passwordError = document.getElementById('passwordError');
    
    if (password === '') {
        passwordError.textContent = 'Password is required';
        passwordInput.style.borderColor = '#d32f2f';
        return false;
    } else if (password.length < 8) {
        passwordError.textContent = 'Password must be at least 8 characters';
        passwordInput.style.borderColor = '#d32f2f';
        return false;
    } else {
        passwordError.textContent = '';
        passwordInput.style.borderColor = '#4CAF50';
        return true;
    }
}

// Event listeners for real-time validation
nameInput.addEventListener('input', validateName);
emailInput.addEventListener('input', validateEmail);
passwordInput.addEventListener('input', validatePassword);

// Form submission
contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Validate all fields
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    
    // If all validations pass
    if (isNameValid && isEmailValid && isPasswordValid) {
        // Show success message
        formSuccess.textContent = 'Form submitted successfully!';
        formSuccess.classList.add('show');
        
        // Reset form
        contactForm.reset();
        
        // Reset borders
        nameInput.style.borderColor = '';
        emailInput.style.borderColor = '';
        passwordInput.style.borderColor = '';
        
        // Hide success message after 3 seconds
        setTimeout(() => {
            formSuccess.classList.remove('show');
        }, 3000);
    }
});
