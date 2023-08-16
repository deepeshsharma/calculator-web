const display = document.getElementById('display');
const buttons = document.querySelectorAll('.buttons button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.textContent === '=') {
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = 'Error';
            }
        } else if (button.textContent === 'C') {
            display.value = '';
        } else if (button.textContent === 'Back') {
            var value = display.value.substr(0, value.length - 1);
            display.value = value;
        }else {
            display.value += button.textContent;
        }
    });
});
