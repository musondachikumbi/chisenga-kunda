const toggle = document.getElementById('themeToggle');
const body = document.body;

// Load saved preference on page load
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark');
}

// Toggle on click and save preference
toggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
});