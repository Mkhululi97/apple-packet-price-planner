describe("Test The PriceCalculate Function", function () {
  describe("Get Apple Buying Data", function () {
    it("Get the cost price for a box of apples", function () {
      let priceCalculate = ApplePriceCalculate();
      assert.equal(40, priceCalculate.getPriceBox(40));
      assert.equal(30, priceCalculate.getPriceBox(30));
    });
    it("Get the number of apples in a box ", function () {
      let priceCalculate = ApplePriceCalculate();
      assert.equal(40, priceCalculate.getApplesInBox(40));
      assert.equal(30, priceCalculate.getApplesInBox(30));
    });
    it("Get the packet size apples are sold in ", function () {
      let priceCalculate = ApplePriceCalculate();
      assert.equal(5, priceCalculate.getPackSize(5));
      assert.equal(4, priceCalculate.getPackSize(4));
    });
    it("Get the required profit %", function () {
      let priceCalculate = ApplePriceCalculate();
      assert.equal(50, priceCalculate.getRequiredProfit(50));
      assert.equal(30, priceCalculate.getRequiredProfit(30));
    });
  });
  describe("Apple Price Calculations", function () {
    it("Calculate the number of packets", function () {
      let priceCalculate = ApplePriceCalculate();
      priceCalculate.getApplesInBox(40);
      priceCalculate.getPackSize(5);
      assert.equal(8, priceCalculate.calcNumOfPacks());
      priceCalculate.getApplesInBox(30);
      priceCalculate.getPackSize(4);
      assert.equal(7.5, priceCalculate.calcNumOfPacks());
    });
    it("Calculate cost price per apple", function () {
      let priceCalculate = ApplePriceCalculate();
      priceCalculate.getPriceBox(40);
      priceCalculate.getApplesInBox(40);
      assert.equal(1, priceCalculate.calcPricePerApple());
      priceCalculate.getPriceBox(60);
      priceCalculate.getApplesInBox(30);
      assert.equal(2, priceCalculate.calcPricePerApple());
    });
    it("Calculate cost price per packet", function () {
      let priceCalculate = ApplePriceCalculate();
      priceCalculate.getPriceBox(40);
      priceCalculate.getApplesInBox(40);
      priceCalculate.calcPricePerApple();
      priceCalculate.getPackSize(5);
      priceCalculate.calcNumOfPacks();
      assert.equal(5, priceCalculate.calcPricePerPack());

      priceCalculate.getPriceBox(60);
      priceCalculate.getApplesInBox(30);
      priceCalculate.calcPricePerApple();
      priceCalculate.getPackSize(4);
      priceCalculate.calcNumOfPacks();
      assert.equal(8, priceCalculate.calcPricePerPack());
    });
    it("Calculate the best price per packet", function () {
      let priceCalculate = ApplePriceCalculate();
      //get functions
      priceCalculate.getPriceBox(40);
      priceCalculate.getApplesInBox(40);
      priceCalculate.getPackSize(5);
      priceCalculate.getRequiredProfit(50);
      //calc functions
      priceCalculate.calcPricePerApple();
      priceCalculate.calcPricePerPack();
      assert.equal(7.5, priceCalculate.calcBestPricePerPack());
    });
  });
});
