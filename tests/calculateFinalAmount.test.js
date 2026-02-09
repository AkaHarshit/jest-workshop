const { calculateFinalAmount } = require("../src/pricing");

test("no coupon: applies only subtotal and possible bulk discount", () => {
  expect(calculateFinalAmount(500, null)).toBe(500);

  expect(calculateFinalAmount(1000, undefined)).toBe(950);
});

test("SAVE10 coupon: 10% off up to max 100", () => {
  expect(calculateFinalAmount(400, "SAVE10")).toBe(360);

  expect(calculateFinalAmount(2000, "SAVE10")).toBe(1800);
});

test("FLAT50 boundary case: exactly 50 off without going below zero", () => {
  expect(calculateFinalAmount(200, "FLAT50")).toBe(150);

  expect(calculateFinalAmount(1000, "FLAT50")).toBe(900);

  expect(calculateFinalAmount(40, "FLAT50")).toBe(0);
});

test("invalid subtotal throws error", () => {
  expect(() => calculateFinalAmount(-100, "SAVE10")).toThrow("Invalid subtotal");
  expect(() => calculateFinalAmount(NaN, "SAVE10")).toThrow("Invalid subtotal");
  expect(() => calculateFinalAmount("100", "SAVE10")).toThrow("Invalid subtotal");
});

test("coupon is case-insensitive", () => {
  expect(calculateFinalAmount(500, "save10")).toBe(
    calculateFinalAmount(500, "SAVE10")
  );
  expect(calculateFinalAmount(500, "SaVe10")).toBe(
    calculateFinalAmount(500, "SAVE10")
  );

  expect(calculateFinalAmount(200, "flat50")).toBe(
    calculateFinalAmount(200, "FLAT50")
  );
  expect(calculateFinalAmount(200, "FlAt50")).toBe(
    calculateFinalAmount(200, "FLAT50")
  );
});

