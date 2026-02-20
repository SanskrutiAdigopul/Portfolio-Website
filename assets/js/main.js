/* Mobile menu toggle (matches markup in index.html) */
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

if (mobileMenuBtn && mobileMenu) {
   mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('show');
   });

   // Close mobile menu when a link is clicked
   mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      mobileMenu.classList.remove('show');
   }));
}

/* Theme toggle (dark / light) */
const themeToggle = document.getElementById('theme-toggle');
const lightIcon = document.querySelector('.theme-icon.light-icon');
const darkIcon = document.querySelector('.theme-icon.dark-icon');

function setTheme(theme){
   if(theme === 'light'){
      document.body.classList.add('light-theme');
      if(lightIcon) lightIcon.style.display = 'inline-block';
      if(darkIcon) darkIcon.style.display = 'none';
      localStorage.setItem('site-theme','light');
   } else {
      document.body.classList.remove('light-theme');
      if(lightIcon) lightIcon.style.display = 'none';
      if(darkIcon) darkIcon.style.display = 'inline-block';
      localStorage.setItem('site-theme','dark');
   }
}

// Initialize theme from localStorage or prefers-color-scheme
const saved = localStorage.getItem('site-theme');
if(saved) setTheme(saved);
else {
   const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
   setTheme(prefersLight ? 'light' : 'dark');
}

if(themeToggle){
   themeToggle.addEventListener('click', ()=>{
      const current = document.body.classList.contains('light-theme') ? 'light' : 'dark';
      setTheme(current === 'light' ? 'dark' : 'light');
   });
}

/* Ensure mobile menu button closes when clicking elsewhere (optional) */
document.addEventListener('click', (e) => {
   if(!mobileMenu || !mobileMenuBtn) return;
   if(!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)){
      mobileMenu.classList.remove('show');
   }
});
