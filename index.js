number = 0;
function increment(num) {
  number += num;
  counter('#test-counter', number, 10);
}

window.onload = function() {
  counter('#test-counter', 0, 10);
  setInterval( function () {
    increment(Math.floor(number/1000)+1);
  }, 33);
}
