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






const tipPercentages = document.querySelector(".tip-percentage").querySelectorAll(".percent");



document.querySelector(".five").addEventListener("click", function() {

  const allPercentItems = document.querySelectorAll(".percent");
  for (let thisPercent of allPercentItems) {
    thisPercent.classList.remove("active");
  }
  document.querySelector(".five").classList.add("active");

  tipAmount(5);
  totalAmount(5);
})

document.querySelector(".ten").addEventListener("click", function() {

  const allPercentItems = document.querySelectorAll(".percent");
  for (let thisPercent of allPercentItems) {
    thisPercent.classList.remove("active");
  }

  document.querySelector(".ten").classList.add("active");

  tipAmount(10);
  totalAmount(10);
})

document.querySelector(".fifteen").addEventListener("click", function() {

    const allPercentItems = document.querySelectorAll(".percent");
    for (let thisPercent of allPercentItems) {
      thisPercent.classList.remove("active");
    }

    document.querySelector(".fifteen").classList.add("active");

  tipAmount(15);
  totalAmount(15);
})

document.querySelector(".twentyfive").addEventListener("click", function() {

  const allPercentItems = document.querySelectorAll(".percent");
  for (let thisPercent of allPercentItems) {
    thisPercent.classList.remove("active");
  }

  document.querySelector(".twentyfive").classList.add("active");

  tipAmount(25);
  totalAmount(25);
})

document.querySelector(".fifty").addEventListener("click", function() {

  const allPercentItems = document.querySelectorAll(".percent");
  for (let thisPercent of allPercentItems) {
    thisPercent.classList.remove("active");
  }

  document.querySelector(".fifty").classList.add("active");

  tipAmount(50);
  totalAmount(50);
})

document.querySelector(".custom").addEventListener("click", function() {

  const allPercentItems = document.querySelectorAll(".percent");
  for (let thisPercent of allPercentItems) {
    thisPercent.classList.remove("active");
  }

  document.querySelector(".custom").classList.add("active");

  const customTipValue = document.querySelector(".custom").value;
  tipAmount(customTipValue);
  totalAmount(customTipValue);
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
    document.querySelector(".total").innerText = "$0.00";
    return "$0.00"
  };

  const tipAmountPerPerson = billInput() * (tipValue / 100) / numberOfPeople();
  document.querySelector(".tip-amount").innerText = `$${tipAmountPerPerson}`;
  return `$${tipAmountPerPerson}`
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

  document.querySelector(".total").innerText = `$${totalAmountPerPerson}`;
  return `$${totalAmountPerPerson}`
}
