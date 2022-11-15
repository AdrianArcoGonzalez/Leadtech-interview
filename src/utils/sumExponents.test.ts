import sumExponents from "./sumExponents";

describe("Given a sumExponents function", () => {
  describe("When it receive numbers array and a 2 as arguments", () => {
    test("Then it should return the sum of the exponents", () => {
      const numbers = [2, 4, 6];
      const expectedReturn = 56;

      const rangedNumbers = sumExponents(numbers, 2);

      expect(rangedNumbers).toBe(expectedReturn);
    });
  });
});
