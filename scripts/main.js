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

// Contact form
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');
const submitBtn = document.getElementById('submitBtn');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  submitBtn.textContent = 'Sending...';
  submitBtn.disabled = true;

  const data = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: data,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      status.textContent = "Message sent! We'll get back to you soon.";
      status.className = 'form-status success';
      form.reset();
    } else {
      throw new Error('Server error');
    }
  } catch (error) {
    status.textContent = 'Something went wrong. Please try emailing us directly.';
    status.className = 'form-status error';
  }

  submitBtn.textContent = 'Send Message';
  submitBtn.disabled = false;
});