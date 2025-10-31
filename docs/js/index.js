// Dark Mode Toggle Functionality
document.addEventListener('DOMContentLoaded', () => {
  // Set current year in footer
  const footerYear = document.getElementById('footer-year');
  if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
  }

  // Dark mode toggle
  const darkModeToggle = document.querySelector('a[href="#mode"]');
  const body = document.body;
  
  // Check for saved dark mode preference
  const isDarkMode = localStorage.getItem('darkMode') === 'true';
  if (isDarkMode) {
    body.classList.add('dark-mode');
  }

  if (darkModeToggle) {
    darkModeToggle.addEventListener('click', (e) => {
      e.preventDefault();
      body.classList.toggle('dark-mode');
      
      // Save preference to localStorage
      const isDark = body.classList.contains('dark-mode');
      localStorage.setItem('darkMode', isDark);
      
      // Update icon
      const icon = darkModeToggle.querySelector('i');
      if (icon) {
        if (isDark) {
          icon.classList.remove('fa-moon');
          icon.classList.add('fa-sun');
          darkModeToggle.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
        } else {
          icon.classList.remove('fa-sun');
          icon.classList.add('fa-moon');
          darkModeToggle.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
        }
      }
    });
  }

  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href.startsWith('#') && href !== '#mode') {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // Add animation on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
      }
    });
  }, observerOptions);

  // Observe all sections
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    observer.observe(section);
  });
});
