let a = '';
let b = '';
let sign = '';
let finish = false;

let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
let operators = ['+', '-', 'x', '/'];

const out = document.querySelector('.calcDisp p');

function clearAll() {
    a = '';
    b = '';
    sign = '';
    finish = false;
    out.textContent = 0;
    console.log(a, sign, b);
}


document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {
    if (!event.target.classList.contains('btn')) return

    if (event.target.classList.contains('ac')) return

    out.textContent = '';

    let key = event.target.textContent;

    if (numbers.includes(key)) {
        if (b === '' && sign === '') {
            a += key;
            out.textContent = a;
            console.log(a, sign, b);
        } else if (a !== '' && b !== '' && finish === true) {
            b = key;
            out.textContent = b;
            finish = false;
            console.log(a, sign, b);
        } else {
            b += key;
            out.textContent = b;
            console.log(a, sign, b);
        }

    }

    if (operators.includes(key)) {
        sign = key;
        out.textContent = sign;
        console.log(a, sign, b);
        return
    }

    if (key === '=') {
        if (b === '') b = a
        switch (sign) {
            case "+":
                a = (+a) + (+b);
                out.textContent = a
                console.log(a)
                break;
            case "-":
                a = a - b;
                out.textContent = a;
                console.log(a)
                break;
            case "x":
                a = a * b;
                out.textContent = a;
                console.log(a)
                break;
            case "/":
                if (b !== '0') {
                    a = a / b
                    out.textContent = a;
                } else {
                    out.textContent = 'Ошибка';
                    a = '';
                    b = '';
                    sign = '';
                    return
                }
                console.log(a)
                break;
        }
        finish = true;
    }

    if (key === '+/-') {
        a *= -1
        out.textContent = a
        console.log(a)
    }

    if (key === '%') {
        if (a !== '' && b === '') {
            a /= 100;
            b = '';
            out.textContent = a

            console.log(a)
        } else if (a !== '' && b !== '') {
            a = a * (b / 100)
            out.textContent = a;
            console.log(a, sign, b)
            finish = true
        }
    }
}