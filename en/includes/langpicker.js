document.write("\
<input class='lang-btn' type='checkbox' name='select-color' id='select-color' />\
<label class='lang-icon' for='select-color'>\
  <img src=../static/lang-en.svg width='23px' height='16px' alt={lang}/>\
</label>\
<ul class='lang-menu'>\
  <li>\
    <a href='javascript:void(0)'onclick='document.getElementById('select-color').checked=false'><span class='lang-close'></span></a>\
  </li>\
  <li>\
    <a href='javascript:window.location.href=window.location.href'>\
      <img src='../static/lang-en.svg' width='23px' height='16px' alt='en'/>\
    </a>\
  </li><li>\
    <a href='../tr/index.html'>\
      <img src='../static/lang-tr.svg' width='23px' height='16px' alt='tr'/>\
    </a>\
  </li>\
</ul>");