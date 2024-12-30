//your JS code here. If required.
// Utility function to set a cookie
function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
}

// Utility function to get a cookie
function getCookie(name) {
  const cookies = document.cookie.split(';');
  for (let cookie of cookies) {
    const [key, value] = cookie.split('=');
    if (key.trim() === name) {
      return value;
    }
  }
  return null;
}

// Apply saved preferences on page load
document.addEventListener('DOMContentLoaded', () => {
  const savedFontSize = getCookie('fontsize');
  const savedFontColor = getCookie('fontcolor');

  if (savedFontSize) {
    document.documentElement.style.setProperty('--fontsize', `${savedFontSize}px`);
    document.getElementById('fontsize').value = savedFontSize;
  }

  if (savedFontColor) {
    document.documentElement.style.setProperty('--fontcolor', savedFontColor);
    document.getElementById('fontcolor').value = savedFontColor;
  }
});

// Handle form submission
document.getElementById('preferences-form').addEventListener('submit', (event) => {
  event.preventDefault();

  const fontSize = document.getElementById('fontsize').value;
  const fontColor = document.getElementById('fontcolor').value;

  // Save preferences to cookies
  setCookie('fontsize', fontSize, 30); // Store for 30 days
  setCookie('fontcolor', fontColor, 30); // Store for 30 days

  // Apply preferences immediately
  document.documentElement.style.setProperty('--fontsize', `${fontSize}px`);
  document.documentElement.style.setProperty('--fontcolor', fontColor);

  alert('Preferences saved successfully!');
});
