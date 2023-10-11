
setInterval(trendTimer1, 1000);
setInterval(trendTimer2, 4000);
setInterval(trendTimer3, 8000);
setInterval(goodbyeTimer, 10000);


function trendTimer1() {
  let show = document.getElementById('1');
  show.style.opacity = "1";
}

function trendTimer2() {
  let show = document.getElementById('2');
  show.style.opacity = "1";
}

function trendTimer3() {
  let show = document.getElementById('3');
  show.style.opacity = "1";
}

function goodbyeTimer() {
  let show1 = document.querySelector('.trends-goodbye');
  let show2 = document.getElementById('trends-link');
  show1.style.opacity = "1";
  show2.style.opacity = "1";
}

