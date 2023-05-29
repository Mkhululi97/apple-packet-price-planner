// ***** APPLE BUYING DATA INPUTS*****
const priceBoxInput = document.querySelector(".price-box");
const applesInBoxInput = document.querySelector(".apples-in-box");
const packSizeInput = document.querySelector(".pack-size");
const requiredProfitInput = document.querySelector(".required-profit");

// ***** APPLE PRICE CALCULATIONS INPUTS*****
const numOfPacks = document.querySelector(".num-of-packs");
const pricePerApple = document.querySelector(".price-per-apple");
const pricePerPacket = document.querySelector(".price-per-packet");
const bestPricePerPacket = document.querySelector(".best-price-per-packet");

const applePriceCalculate = ApplePriceCalculate();
const calculateBtn = document.querySelector(".calculate-btn");
const newCalculationsBtn = document.querySelector(".new-caclulations-btn");

function calculateBtnFunction() {
  // ***** APPLE BUYING DATA *****
  //1st input
  applePriceCalculate.getPriceBox(Number(priceBoxInput.value));
  // 2nd input
  applePriceCalculate.getApplesInBox(Number(applesInBoxInput.value));
  // 3rd input
  applePriceCalculate.getPackSize(Number(packSizeInput.value));
  // 4th input
  applePriceCalculate.getRequiredProfit(Number(requiredProfitInput.value));

  // ***** APPLE PRICE CALCULATIONS *****
  // 1st input
  numOfPacks.value = applePriceCalculate.calcNumOfPacks();
  // 2nd input
  pricePerApple.value = `R ${applePriceCalculate.calcPricePerApple()}`;
  // 3rd input
  pricePerPacket.value = `R ${applePriceCalculate.calcPricePerPack()}`;
  // 4th input
  bestPricePerPacket.value = `R ${applePriceCalculate.calcBestPricePerPack()}`;
}
function newCaclulationsFunction() {
  priceBoxInput.value = "";
  applesInBoxInput.value = "";
  packSizeInput.value = "";
  requiredProfitInput.value = "";

  numOfPacks.value = "";
  pricePerApple.value = "";
  pricePerPacket.value = "";
  bestPricePerPacket.value = "";
}
calculateBtn.addEventListener("click", calculateBtnFunction);
newCalculationsBtn.addEventListener("click", newCaclulationsFunction);
