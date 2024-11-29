const display = document.getElementById('display');
let isPoweredOn = true;

function appendValue(value) {
  if (isPoweredOn) {
    display.value += value;
  }
}

function clearDisplay() {
  if (isPoweredOn) {
    display.value = '';
  }
}

function deleteLast() {
  if (isPoweredOn) {
    display.value = display.value.slice(0, -1);
  }
}

function calculate() {
  if (isPoweredOn) {
    try {
      display.value = eval(display.value);
    } catch {
      display.value = 'Error';
    }
  }
}

function togglePower() {
  isPoweredOn = !isPoweredOn;
  display.value = isPoweredOn ? '' : 'OFF';
}
