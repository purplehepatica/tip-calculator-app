const billInput = () => {
  const billValue = document.querySelector(".bill-input").value;

  if (isNaN(billValue) === true || Number(billValue < 0)) {
    return null;
  }

  return Number(billValue);
}

const numberOfPeople = () => {
  const numberOfPeople = document.querySelector(".number-of-people-input").value;

  if (isNaN(numberOfPeople) === true || Number(numberOfPeople < 0)) {
    return null;
  }

  return Number(numberOfPeople);
}




let selectedTipValue = 0;

const tipPercentages = document.querySelector(".tip-percentage").querySelectorAll(".percent");



document.querySelector(".five").addEventListener("click", function() {

  selectedTipValue = 5;

  const allPercentItems = document.querySelectorAll(".percent");
  for (let thisPercent of allPercentItems) {
    thisPercent.classList.remove("active");
  }
  document.querySelector(".five").classList.add("active");

  tipAmount(5);
  totalAmount(5);

  return selectedTipValue;
})

document.querySelector(".ten").addEventListener("click", function() {

  selectedTipValue = 10;

  const allPercentItems = document.querySelectorAll(".percent");
  for (let thisPercent of allPercentItems) {
    thisPercent.classList.remove("active");
  }

  document.querySelector(".ten").classList.add("active");

  tipAmount(10);
  totalAmount(10);

  return selectedTipValue;
})

document.querySelector(".fifteen").addEventListener("click", function() {

  selectedTipValue = 15;

    const allPercentItems = document.querySelectorAll(".percent");
    for (let thisPercent of allPercentItems) {
      thisPercent.classList.remove("active");
    }

    document.querySelector(".fifteen").classList.add("active");

  tipAmount(15);
  totalAmount(15);

  return selectedTipValue;
})

document.querySelector(".twentyfive").addEventListener("click", function() {

  selectedTipValue = 25;

  const allPercentItems = document.querySelectorAll(".percent");
  for (let thisPercent of allPercentItems) {
    thisPercent.classList.remove("active");
  }

  document.querySelector(".twentyfive").classList.add("active");

  tipAmount(25);
  totalAmount(25);

  return selectedTipValue;
})

document.querySelector(".fifty").addEventListener("click", function() {

  selectedTipValue = 50;

  const allPercentItems = document.querySelectorAll(".percent");
  for (let thisPercent of allPercentItems) {
    thisPercent.classList.remove("active");
  }

  document.querySelector(".fifty").classList.add("active");

  tipAmount(50);
  totalAmount(50);

  return selectedTipValue;
})

document.querySelector(".custom").addEventListener("click", function() {

  selectedTipValue = document.querySelector(".custom").value;

  const allPercentItems = document.querySelectorAll(".percent");
  for (let thisPercent of allPercentItems) {
    thisPercent.classList.remove("active");
  }

  document.querySelector(".custom").classList.add("active");

  const customTipValue = document.querySelector(".custom").value;
  tipAmount(customTipValue);
  totalAmount(customTipValue);

  return selectedTipValue;
})






function tipAmount(tipValue) {

  if (billInput() === null || billInput() === 0) {
    document.querySelector(".tip-amount").innerText = "$0.00";
    return "$0.00"
  };

  if (numberOfPeople() === null || numberOfPeople() === 0) {
    document.querySelector(".tip-amount").innerText = "$0.00";
    return "$0.00"
  };

  if (tipValue === null || tipValue < 0) {
    document.querySelector(".tip-amount").innerText = "$0.00";
    return "$0.00"
  };

  const tipAmountPerPerson = billInput() * (tipValue / 100) / numberOfPeople();
  document.querySelector(".tip-amount").innerText = `$${tipAmountPerPerson.toFixed(2)}`;
  return `$${tipAmountPerPerson.toFixed(2)}`
}



function totalAmount(tipValue) {

  if (billInput() === null || billInput() === 0) {
    document.querySelector(".total").innerText = "$0.00";
    return "$0.00"
  };

  if (numberOfPeople() === null || numberOfPeople() === 0) {
    document.querySelector(".total").innerText = "$0.00";
    return "$0.00"
  };

  if (tipValue === null || tipValue < 0) {
    document.querySelector(".total").innerText = "$0.00";
    return "$0.00"
  };

  const totalAmountPerPerson = (billInput() + (billInput() * (tipValue / 100))) / numberOfPeople();

  document.querySelector(".total").innerText = `$${totalAmountPerPerson.toFixed(2)}`;
  return `$${totalAmountPerPerson.toFixed(2)}`
}


document.querySelector(".reset").addEventListener("click", reset);

function reset() {
  const inputs = document.querySelectorAll("input");

  for (let input of inputs) {
    input.value = "";
    document.querySelector(".tip-amount").innerText = "$0.00";
    document.querySelector(".total").innerText = "$0.00";

    const allPercentItems = document.querySelectorAll(".percent");
    for (let thisPercent of allPercentItems) {
      thisPercent.classList.remove("active");
    }
  }
}

setInterval(function() {
  tipAmount(selectedTipValue)
  totalAmount(selectedTipValue)
}, 100)
