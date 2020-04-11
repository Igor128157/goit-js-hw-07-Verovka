'use strict';

let counterValue = 0;
function increment() {
  document.getElementById("value").innerHTML = counterValue += 1;
}
function decrement() {
  document.getElementById("value").innerHTML = counterValue -= 1;
};
