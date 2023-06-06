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



document.querySelector(".five").addEventListener("click", function() {
  tipAmount(5);
  totalAmount(5);
})

document.querySelector(".ten").addEventListener("click", function() {
  tipAmount(10);
  totalAmount(10);
})

document.querySelector(".fifteen").addEventListener("click", function() {
  tipAmount(15);
  totalAmount(15);
})

document.querySelector(".twentyfive").addEventListener("click", function() {
  tipAmount(25);
  totalAmount(25);
})

document.querySelector(".fifty").addEventListener("click", function() {
  tipAmount(50);
  totalAmount(50);
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

  const totalAmountPerPerson = (billInput() + (billInput() * (tipValue / 100))) / numberOfPeople();

  document.querySelector(".total").innerText = `$${totalAmountPerPerson}`;
  return `$${totalAmountPerPerson}`
}
