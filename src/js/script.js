const display = document.getElementById('display');

// Adiciona valores no display
function appendValue(value) {
  display.value += value;
}

// Limpa o display
function clearDisplay() {
  display.value = '';
}

// Calcula a expressão do display
function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    alert('Expressão inválida!');
    clearDisplay();
  }
}
