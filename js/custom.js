/* custom.js */
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".sidebar button");
  const cards = document.querySelectorAll(".photo-card");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const category = button.getAttribute("data-category");

      cards.forEach((card) => {
        if (category === "all" || card.getAttribute("data-category") === category) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
});
// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  
  // Handle the CTA button click to open the order form modal
  document.querySelector('.cta-button').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('order-now-form').style.display = 'block';
  });

  // Close the modal when clicking the "X" or outside the modal
  document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('order-now-form').style.display = 'none';
  });

  // Close the modal if user clicks outside the modal area
  window.onclick = function(event) {
    if (event.target === document.getElementById('order-now-form')) {
      document.getElementById('order-now-form').style.display = 'none';
    }
  }

});
function switchLanguage() {
  const currentLanguage = document.documentElement.lang;
  const newLanguage = currentLanguage === 'pt' ? 'en' : 'pt';

  // Set the new language on the <html> tag
  document.documentElement.lang = newLanguage;

  // Update the text on the button to show the current language
  document.getElementById('language-text').textContent = newLanguage.toUpperCase();

  // Update the icon based on the language
  const iconPath = newLanguage === 'pt' ? '/path/to/pt-icon.png' : '/path/to/en-icon.png';
  document.querySelector('.language-icon').src = iconPath;

  // Save the selected language in localStorage to persist the preference
  localStorage.setItem('language', newLanguage);

  // Switch the content based on the selected language
  if (newLanguage === 'pt') {
    document.querySelectorAll('.lang-en').forEach(el => el.style.display = 'none');
    document.querySelectorAll('.lang-pt').forEach(el => el.style.display = 'block');
  } else {
    document.querySelectorAll('.lang-en').forEach(el => el.style.display = 'block');
    document.querySelectorAll('.lang-pt').forEach(el => el.style.display = 'none');
  }
}

// On page load, set the language based on saved preference
window.onload = function() {
  const savedLanguage = localStorage.getItem('language') || 'pt';
  document.documentElement.lang = savedLanguage;
  document.getElementById('language-text').textContent = savedLanguage.toUpperCase();
  const iconPath = savedLanguage === 'pt' ? '/path/to/pt-icon.png' : '/path/to/en-icon.png';
  document.querySelector('.language-icon').src = iconPath;
  switchLanguage();  // Initialize language visibility
};

