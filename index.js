number = 1e16;
function increment(num) {
  number += num;
  counter('#test-counter', number, 20);
}

window.onload = function() {
  counter('#test-counter', 0, 20);
  setInterval( function () {
    increment(Math.floor(number/1000)+1);
  }, 33);
}
