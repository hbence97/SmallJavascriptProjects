const percentW = document.querySelector('.percent-w');
const moneyW = document.querySelector('.money-w');
const percentL = document.querySelector('.percent-l');
const moneyL = document.querySelector('.money-l');
const button = document.querySelector('.button');
const result = document.querySelector('.result');
const minusEV = document.querySelector('.minus-ev');
const plusEV = document.querySelector('.plus-ev');

button.addEventListener('click', e => {
    e.preventDefault();
    result.innerHTML = '';
    minusEV.style.display = 'none';
    plusEV.style.display = 'none';

    if (percentW.value === '' || moneyW.value === '' || percentL.value === '' || moneyL.value === '') {
        alert('Please provide valid informations');
    } else {
        const calculatedEV = ((percentW.value / 100) * moneyW.value) - ((percentL.value / 100) * moneyL.value);
        const roundedCalculatedEV = Math.round(calculatedEV * 10) / 10;
        if (calculatedEV < 0) {
            minusEV.style.display = 'block';
            result.style.color = '#fc121b';
            result.innerHTML = roundedCalculatedEV + '$';
        } else {
            plusEV.style.display = 'block';
            result.style.color = '#4dcc7d';
            result.innerHTML = '+' + roundedCalculatedEV + '$';
        }
    }

    percentW.value = '';
    moneyW.value = '';
    percentL.value = '';
    moneyL.value = '';
});