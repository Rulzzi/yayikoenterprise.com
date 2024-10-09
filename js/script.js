function ShowSidebar() {
  const sidebar = document.querySelector(".sidebar")
  sidebar.style.display = "flex"
}

function HideSidebar() {
  const sidebar = document.querySelector(".sidebar")
  sidebar.style.display = "none"
}

function PlatformBar() {
  const platform = document.querySelector(".platform");

  if (platform.style.display === "none" || platform.style.display === "") {
    platform.style.display = "block";
  } else {
    platform.style.display = "none";
  }
}
// Select all buttons that should toggle between light and dark mode
const toggleButtons = document.querySelectorAll('.dark-mode-toggle');

// Add event listeners to each button
toggleButtons.forEach(button => {
  button.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    
    // Check if the light mode is enabled
    if (document.body.classList.contains('light-mode')) {
      // Save the preference as 'light'
      localStorage.setItem('theme', 'light');
    } else {
      // Save the preference as 'dark'
      localStorage.setItem('theme', 'dark');
    }
  });
});

// Apply the saved theme on page load
function applySavedTheme() {
  const savedTheme = localStorage.getItem('theme');
  
  // Apply the saved theme (light or dark) based on the user's preference
  if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
  } else {
    document.body.classList.remove('light-mode'); // Default is dark mode
  }
}

// Apply theme when the page loads
window.onload = applySavedTheme;


window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');

    // When user scrolls down 50px from the top, add the 'scrolled' class
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// var input = document.querySelector("#phone");
// window.intlTelInput(input,{});

// Initialize EmailJS with your user ID
(function() {
  emailjs.init("Rulzzi");  // Replace with your EmailJS user ID
})();

// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Collect form data
  const formData = {
    name: document.getElementById('name').value,
    lastname: document.getElementById('lastname').value,
    company: document.getElementById('company').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    contact_method: document.querySelector('input[name="contact_method"]:checked').value,
    reason: document.querySelector('textarea[name="reason"]').value,
    time_from: document.getElementById('time-from').value,
    time_to: document.getElementById('time-to').value,
    additional_info: document.querySelector('textarea[name="additional_info"]').value,
  };

  // Send the email using EmailJS
  // emailjs.send('Yayiko221', 'template_1', formData)
  emailjs.send("Yayiko221","template_1", formData)
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
      alert('Your message has been sent successfully!');
    }, function(error) {
      console.log('FAILED...', error);
      alert('Failed to send the message. Please try again.');
    });
});


