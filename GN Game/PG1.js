// Ta3refat 3AMA
let timeout;
var f = document.getElementById("Myform"); //main div
var b = document.getElementById("OB"); // open button
var min;
var max;
var as;
x = "";

function cform() {
  var min2 = document.getElementById('MIN');
  var max2 = document.getElementById('MAX');
  var as2 = document.getElementById('as')
  document.getElementById("PAS").innerHTML = "Put Here Your Number";

    document.getElementById("PAS").style.color = "black";
  min2.value = '';
  max2.value = '';
  as2.value = '';
  d2.style.display = "none";
  MF.style.display = "block";
}

// start command
function rnd() {
  lives = document.getElementById("bLives");
  var min = parseInt(document.getElementById("MIN").value);
  var max = parseInt(document.getElementById("MAX").value);
  d2 = document.getElementById("d2"); // seconed div
  d2.style.display = "block";
  MF = document.getElementById("mf"); // seconed main div
  MF.style.display = "none";
  x = Math.floor(Math.random() * (max - min) + min);

  if (Math.floor(Math.floor(max - min) + 1) >= 10) {
    l = "3";
    lives.innerHTML = l;
  }

  if (Math.floor(Math.floor(max - min) + 1) >= 30) {
    l = "5";
    lives.innerHTML = l;
  }

  if (Math.floor(Math.floor(max - min) + 1) >= 100) {
    l = "10";
    lives.innerHTML = l;
  }

  var as = document.getElementById("as");
  as.max = max;
  as.min = min;
}



function ans() {
  lives = document.getElementById("bLives");
  as = parseInt(document.getElementById("as").value);
  l = l;
  if (x == as) {
    document.getElementById("PAS").innerHTML = "TRUE, Congratlation";
    document.getElementById("PAS").style.color = "green";
}

  if (x < as) {
    document.getElementById("PAS").innerHTML = "FALSE, Thats IS Too Hight";
    document.getElementById("PAS").style.color = "red";
    l = l - 1;
    lives.innerHTML = l;
  }
  if (x > as) {
    document.getElementById("PAS").innerHTML = "FALSE, Thats IS Too Small";
    document.getElementById("PAS").style.color = "red";
    l = l - 1;
    lives.innerHTML = l;
  }

  if (l == 0) {
   setTimeout(cform, 3000)
  }
}

  



// open and close commands

function openf() {
  f.style.display = "block";
  b.style.display = "none";
}

function closefd() {
  f.style.display = "none";
  b.style.display = "block";
}
