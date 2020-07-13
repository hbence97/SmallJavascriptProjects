const tip = document.querySelector(".tip");
const totalTip = document.querySelector(".total-tip");
const each = document.querySelector(".each");
const button = document.querySelector(".button")

totalTip.style.display = "none";
each.style.display = "none";

button.addEventListener("click", () => {
    const receiptAmount = document.getElementById("receipt-amount").value;
    const serviceQuality = document.getElementById("service-quality").value;
    const numberOfPeople = document.getElementById("number-of-people").value;

    if (receiptAmount === "" || serviceQuality === "" || numberOfPeople === "") {
        alert("Please enter valid inputs!");
        totalTip.style.display = "none";
        each.style.display = "none";
        return;
    } else if (receiptAmount <= 0 || serviceQuality <= 0 || numberOfPeople <= 0) {
        alert("Please enter valid inputs!");
        totalTip.style.display = "none";
        each.style.display = "none";
        return;
    } else {
        each.style.display = "block";
    }

    let total = (receiptAmount * serviceQuality) / numberOfPeople;
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);
    totalTip.style.display = "block";
    tip.innerHTML = total;
});