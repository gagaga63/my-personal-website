const themeToggle = document.querySelector('.theme-toggle');
const savedTheme = localStorage.getItem('yu-an-theme');
if (savedTheme === 'dark') document.body.classList.add('dark');

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('yu-an-theme', document.body.classList.contains('dark') ? 'dark' : 'light');
});

const filterButtons = document.querySelectorAll('.filter-button');
const projects = document.querySelectorAll('.project-card');
filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    filterButtons.forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    const filter = button.dataset.filter;
    projects.forEach((project) => {
      project.classList.toggle('is-hidden', filter !== 'all' && project.dataset.category !== filter);
    });
  });
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.content-section, .contact-section').forEach((section) => {
  section.classList.add('reveal');
  revealObserver.observe(section);
});
