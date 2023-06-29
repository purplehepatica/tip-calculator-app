let billValue = null;

document.querySelector(".bill-input").addEventListener("input", function() {

  if (isNaN(document.querySelector(".bill-input").value) === true || Number(document.querySelector(".bill-input").value) < 0) {
    document.querySelector(".bill-input").style.backgroundColor = "red";s
    billValue = null;
  }

  billValue = Number(document.querySelector(".bill-input").value);

  updateFinalPrices()
})



let tipPercentValue = null;
const allPercentItems = document.querySelectorAll(".percent");

allPercentItems.forEach((item, index) => {

  if (item.classList.contains("custom")) {
    item.addEventListener("input", function() {
      tipPercentValue = Number(document.querySelector(".custom").value);

      for (let thisPercent of allPercentItems) {
        thisPercent.classList.remove("active");
      }

      item.classList.add("active");

      tipAmount()
    })
  } else if (item.classList.contains("percent-button")) {
    item.addEventListener("click", function() {
      tipPercentValue = item.getAttribute("data-tip-percent");

      for (let thisPercent of allPercentItems) {
        thisPercent.classList.remove("active");
      }

      item.classList.add("active");

      updateFinalPrices()
    })
  }



})



let numberOfPeople = null;

document.querySelector(".number-of-people-input").addEventListener("input", function() {
  numberOfPeople = Number(document.querySelector(".number-of-people-input").value);

  updateFinalPrices()
})



function tipAmount() {

  if (billValue !== null && tipPercentValue !== null && numberOfPeople !== null ) {
    const tipAmountPerPerson = billValue * (tipPercentValue / 100) / numberOfPeople;
    document.querySelector(".tip-amount").innerText = `$${tipAmountPerPerson.toFixed(2)}`;
    return `$${tipAmountPerPerson.toFixed(2)}`
  }

}



function totalAmount() {

  if (billValue !== null && tipPercentValue !== null && numberOfPeople !== null ) {
    const totalAmountPerPerson = (billValue + (billValue * (tipPercentValue / 100) / numberOfPeople));

    document.querySelector(".total").innerText = `$${totalAmountPerPerson.toFixed(2)}`;
    return `$${totalAmountPerPerson.toFixed(2)}`
  }
}

function updateFinalPrices() {
  tipAmount();
  totalAmount();
}
