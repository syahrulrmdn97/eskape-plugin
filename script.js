(function(){
  'use strict';
  var cfg = window.ESKAPE_SITE_CONFIG || {};
  var toast = document.getElementById('toast');
  var toastTimer;
  function showToast(message){
    toast.textContent = message;
    toast.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function(){ toast.hidden = true; }, 5500);
  }
  document.querySelectorAll('[data-whatsapp]').forEach(function(btn){
    btn.addEventListener('click', function(){
      var number = String(cfg.whatsappNumber || '').replace(/\D/g,'');
      if(number.length < 10){
        showToast('Nomor WhatsApp publisher belum dikonfigurasi. Atur whatsappNumber pada config.js dahulu.');
        return;
      }
      var msg = 'Halo, saya ingin membeli eskape Full. Mohon info harga dan aktivasi key. Saya akan kirim Installation ID dari About plugin.';
      window.open('https://wa.me/' + number + '?text=' + encodeURIComponent(msg), '_blank', 'noopener,noreferrer');
    });
  });
  var links = document.querySelectorAll('.nav-pills a');
  function setActive(hash){ links.forEach(function(a){ a.classList.toggle('active',a.getAttribute('href')===hash); }); }
  if('IntersectionObserver' in window){
    var sections = document.querySelectorAll('section[id]');
    var obs = new IntersectionObserver(function(entries){ entries.forEach(function(e){ if(e.isIntersecting) setActive('#'+e.target.id); }); },{rootMargin:'-20% 0px -65% 0px'});
    sections.forEach(function(e){obs.observe(e);});
  }
})();
