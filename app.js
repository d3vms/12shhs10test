document.addEventListener('DOMContentLoaded', function(){
  var style = `#button {
  display:none;
}
.imgb_vis {
  animation: imgb-animation 7s linear;
}
@keyframes imgb-animation {
  10% {
    transform: translateX(0);
  }
  20% {
    transform: translateX(100px);
  }
  90% {
    transform: translateX(100px);
  }
  100% {
    transform: translateX(0);
  }
}`;
  addStyle(style);

  var image = document.getElementById('button');
  var i = 0;
  var s = ['block', 'none'];
  var t = [7000, 100000];
  show();

  document.querySelector('.imgb').classList.add('imgb_vis');

  function addStyle(styles) {
    var css = document.createElement('style');
    css.type = 'text/css';

    if (css.styleSheet) {
      css.styleSheet.cssText = styles;
    } else {
      css.appendChild(document.createTextNode(styles));
    }

    document.getElementsByTagName('head')[0].appendChild(css);
  }

  function show() {
    i ^= 1;
    image.style.display = s[i];
    setTimeout(show, t[i]);
  }
});
