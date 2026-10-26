document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.getElementById('navToggle');
  const offcanvas = document.getElementById('offcanvas');
  const overlay = document.getElementById('offcanvasOverlay');

  navToggle.addEventListener('click', function() {
    offcanvas.classList.toggle('active');
    overlay.classList.toggle('active');
  });

  navToggle.addEventListener('keypress', function(e){
    if (e.key === 'Enter' || e.key === ' ') {
      offcanvas.classList.toggle('active');
      overlay.classList.toggle('active');
    }
  });

  overlay.addEventListener('click', function() {
    offcanvas.classList.remove('active');
    overlay.classList.remove('active');
  });

  offcanvas.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      offcanvas.classList.remove('active');
      overlay.classList.remove('active');
    });
  });
});
