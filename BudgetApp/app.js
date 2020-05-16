const container = document.querySelector(".container");
const budget = document.querySelector(".budget-form");
const spanBudget = document.querySelector(".budget-amount");
const expense = document.querySelector(".expense-form");
const spanExpense = document.querySelector(".expense-amount");
const spanExpenseName = document.querySelector(".expense-name");
const listOfExpenses = document.querySelector(".expenses");
const listItemAmount = document.querySelector(".list-item-amount");
let spanBalance = document.querySelector(".balance-amount");

function addNewExpense () {
    const html = `
        <li class="list-of-expense">
            <span class="list-item-name">${spanExpenseName.value}</span>
            <span class="list-item-amount">${spanExpense.innerText}</span>
        </li>
        `;

        listOfExpenses.innerHTML += html;
};

container.addEventListener("submit", e => {
    e.preventDefault();
    let budgetValue = 0;
    let expenseValue = 0;
    if (e.target === budget) {
        budgetValue = budget.budgetInput.value;
        budgetValue > 0 ? spanBudget.innerHTML = `${budgetValue}` : spanBudget.innerHTML = `0`;
        budget.budgetInput.value =  "";
    }

    if (e.target === expense) {
        expenseValue = expense.expenseAmountInput.value;
        expenseValue > 0 ? spanExpense.innerHTML = `${expenseValue}` : spanExpense.innerHTML =`0`;
        expense.expenseAmountInput.value = "";
        addNewExpense();
    }
    spanBalance.innerText = parseInt(spanBalance.innerText) + parseInt(spanBudget.innerText - spanExpense.innerText);
});
