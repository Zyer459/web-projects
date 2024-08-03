document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById('display');
    const NumBtns = document.querySelectorAll('[number]');
    const OperBtns = document.querySelectorAll('[operator]');
    const EqualsBtn = document.querySelector('[equals]');
    const AcBtn = document.querySelector('[all-clear]');
    const DelBtn = document.querySelector('[delete]');

    //variables
    let a = 0, b = 0, c = 0, operator = '';
    NumBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            display.value += btn.textContent;
        });
    });

    //operations
    OperBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            if (display.value != '') {
                a = parseFloat(display.value);
                display.value = '';
                operator = btn.textContent;
            }
        });
    });

    //equals
    EqualsBtn.addEventListener('click', () => {
        b = parseFloat(display.value);

        if (operator == '+') {
            c = a + b;
        }
        else if (operator == '-') {
            c = a - b;
        }
        else if (operator == '*') {
            c = a * b;
        }
        else if (operator == '/') {
            c = a / b;
        }
        else if (operator == '%') {
            c = a % b;
        }
        display.value = c;
        a = b = 0
    });

    AcBtn.addEventListener('click', () => {
        display.value = '';
        a = b = c = 0;
    });
});

//needs improvement