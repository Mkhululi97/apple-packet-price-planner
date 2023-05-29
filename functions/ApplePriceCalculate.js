function ApplePriceCalculate() {
  let boxPrice = 0;
  let applesInABox = 0;
  let applesInAPack = 0;
  let requiredProfit = 0;
  let numOfPacks, pricePerApple, pricePerPack, packPrice;

  // GET APPLE PRICE DATA
  function getPriceBox(inputBoxPrice) {
    boxPrice = inputBoxPrice;
    return boxPrice;
  }
  function getApplesInBox(inputApplesInABox) {
    applesInABox = inputApplesInABox;
    return applesInABox;
  }
  function getPackSize(inputApplesInAPack) {
    applesInAPack = inputApplesInAPack;
    return applesInAPack;
  }
  function getRequiredProfit(inputRequiredProfit) {
    requiredProfit = inputRequiredProfit;
    return requiredProfit;
  }

  // APPLE PRICE CALCULATIONS
  function calcNumOfPacks() {
    numOfPacks = applesInABox / applesInAPack;
    return numOfPacks;
  }
  function calcPricePerApple() {
    pricePerApple = boxPrice / applesInABox;
    return pricePerApple;
  }
  function calcPricePerPack() {
    pricePerPack = pricePerApple * applesInAPack;
    return pricePerPack;
  }
  function calcBestPricePerPack() {
    packPrice = (requiredProfit / 100) * pricePerPack + pricePerPack;
    return packPrice;
  }
  return {
    getPriceBox,
    getApplesInBox,
    getPackSize,
    getRequiredProfit,

    calcNumOfPacks,
    calcPricePerApple,
    calcPricePerPack,
    calcBestPricePerPack,
  };
}
