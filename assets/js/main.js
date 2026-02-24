// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(
  (entries) => entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  }),
  { threshold: 0.12 }
);
revealEls.forEach(el => observer.observe(el));

// Trigger hero items immediately on load
document.querySelectorAll('#hero .reveal').forEach(el => {
  setTimeout(() => el.classList.add('visible'), 100);
});

// Dark mode toggle
const toggle = document.getElementById('themeToggle');
const sun = document.getElementById('iconSun');
const moon = document.getElementById('iconMoon');

// Restore saved preference
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
  sun.style.display = 'block';
  moon.style.display = 'none';
}

toggle.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark');
  sun.style.display = isDark ? 'block' : 'none';
  moon.style.display = isDark ? 'none' : 'block';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});