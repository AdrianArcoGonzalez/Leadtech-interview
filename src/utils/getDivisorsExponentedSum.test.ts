import getDivisorsExponentedSum from "./getDivisorsExponentedSum";

describe("Given a getDivisorsExponentSum function", () => {
  describe("When it receive numbers array as argument", () => {
    test("Then it should return the sum the exponents of divisors", () => {
      const numbers = [1, 2, 3];
      const expectedReturn = [1, 5, 10];

      const result = getDivisorsExponentedSum(numbers);

      expect(result).toStrictEqual(expectedReturn);
    });
  });
});
