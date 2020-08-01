number = 0;
function increment(num) {
  number += num;
  counter('#test-counter', number, 4);
}

window.onload = function() {
  counter('#test-counter', 0, 4);
}
