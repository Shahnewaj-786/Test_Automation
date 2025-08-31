const { expect } = require("chai");
const { add, multiply } = require("../src/math");

describe("Math Functions", function () {
  it("should add two numbers correctly", function () {
    expect(add(2, 3)).to.equal(5);
  });

  it("should multiply two numbers correctly", function () {
    expect(multiply(2, 3)).to.equal(6);
  });
});
