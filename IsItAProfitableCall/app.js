const button = document.querySelector('.button');
const outs = document.querySelector('.outs');
const checkbox = document.querySelector('.checkbox');
const reward = document.querySelector('.reward');
const risk = document.querySelector('.risk');
const boxChecked = document.querySelector('.checkbox');
const yourEquity = document.querySelector('.your-equity');
const yourPotOdds = document.querySelector('.your-pot-odds');
const equityResult = document.querySelector('.equity-result');
const potOddsResult = document.querySelector('.pot-odds-result');
const plusEvCall = document.querySelector('.plus-ev-call');
const minusEvCall = document.querySelector('.minus-ev-call');

yourEquity.style.display = 'none';
yourPotOdds.style.display = 'none';
plusEvCall.style.display = 'none';
minusEvCall.style.display = 'none';

const notAllInOutsWPercentage = {
    1: 2.13,
    2: 4.26,
    3: 6.38,
    4: 8.51,
    5: 10.64,
    6: 12.77,
    7: 14.89,
    8: 17.02,
    9: 19.05,
    10: 21.28,
    11: 23.40,
    12: 25.53,
    13: 27.66,
    14: 29.79,
    15: 31.91,
    16: 34.04,
    17: 36.17,
    18: 38.30,
    19: 40.43,
    20: 42.55
}

const AllInOutsWPercentage = {
    1: 4.26,
    2: 8.42,
    3: 12.49,
    4: 16.47,
    5: 20.35,
    6: 24.14,
    7: 27.84,
    8: 31.45,
    9: 34.97,
    10: 38.39,
    11: 41.72,
    12: 44.96,
    13: 48.10,
    14: 51.16,
    15: 54.12,
    16: 56.98,
    17: 59.76,
    18: 62.4,
    19: 65.0,
    20: 67.5
}

button.addEventListener('click', e => {
    e.preventDefault();

    minusEvCall.style.display = 'none';
    plusEvCall.style.display = 'none';
    yourEquity.style.display = 'none';
    yourPotOdds.style.display = 'none';

    const outsInput = outs.value;

    if (outsInput === '' || outsInput <= 0 || outsInput > 20 || reward.value === '' || reward.value <= 0 || risk.value === '' || risk.value <= 0) {
        alert("Please provide valid informations");
    } else {
        let ratioToPercentage = Number(risk.value) / (Number(risk.value) + Number(reward.value));
        ratioToPercentage *= 100;
        const roundedRatioToPercentage = Math.round(ratioToPercentage * 10) / 10;

        yourEquity.style.display = 'block';
        yourPotOdds.style.display = 'block';

        if (boxChecked.checked) {
            equityResult.innerHTML = AllInOutsWPercentage[outsInput];
            if (Number(AllInOutsWPercentage[outsInput]) > roundedRatioToPercentage ) {
                plusEvCall.style.display = 'block';
            } else {
                minusEvCall.style.display = 'block';
            }
        } else {
            equityResult.innerHTML = notAllInOutsWPercentage[outsInput];
            if (Number(notAllInOutsWPercentage[outsInput]) > roundedRatioToPercentage ) {
                plusEvCall.style.display = 'block';
            } else {
                minusEvCall.style.display = 'block';
            }
        }

        potOddsResult.innerHTML = roundedRatioToPercentage;

        outs.value = "";
        risk.value = "";
        reward.value = "";
    }
});