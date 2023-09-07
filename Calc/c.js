let disp = document.getElementById('disp');
let now = '';

function display(val) {
  now += val;
  disp.value = now;
}
function equal() {
  now = eval(now).toString();
  disp.value = now;
}

function c() {
  now = '';
  disp.value = '';
}

