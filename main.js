(function () {
  /* ---- mağaza sekmeleri ---- */
  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role="tab"]'));
  function show(tab) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { show(t); });
    t.addEventListener('keydown', function (e) {
      var n = null;
      if (e.key === 'ArrowRight') n = tabs[(i + 1) % tabs.length];
      if (e.key === 'ArrowLeft') n = tabs[(i - 1 + tabs.length) % tabs.length];
      if (n) { e.preventDefault(); n.focus(); show(n); }
    });
  });

  /* ---- tekne siparişi: WhatsApp mesajı hazırlar ---- */
  var NUMBER = '905000000000'; // örnek numara: gerçek WhatsApp numarasıyla değiştirin
  var form = document.getElementById('order');
  var sum = document.getElementById('sum');
  var send = document.getElementById('send');

  function fmtDate(v) {
    if (!v) return '';
    var p = v.split('-');
    return p[2] + '.' + p[1] + '.' + p[0];
  }
  function build() {
    var f = form.elements;
    var lines = ['Merhaba Meltem Kasap, tekneye sipariş vermek istiyorum.'];
    lines.push('Paket: ' + f.paket.value);
    if (f.kisi.value) lines.push('Kişi sayısı: ' + f.kisi.value);
    if (f.tarih.value) lines.push('Teslim tarihi: ' + fmtDate(f.tarih.value));
    if (f.tekne.value.trim()) lines.push('Tekne: ' + f.tekne.value.trim());
    if (f.iskele.value.trim()) lines.push('Marina/iskele: ' + f.iskele.value.trim());
    if (f['not'].value.trim()) lines.push('Not: ' + f['not'].value.trim());
    var text = lines.join('\n');
    sum.textContent = text;
    send.href = 'https://wa.me/' + NUMBER + '?text=' + encodeURIComponent(text);
  }
  form.addEventListener('input', build);
  form.addEventListener('change', build);
  form.addEventListener('submit', function (e) { e.preventDefault(); });
  build();
})();
