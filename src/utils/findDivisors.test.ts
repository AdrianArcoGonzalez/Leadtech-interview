import findDivisorsWithRestZero from "./findDivisors";

describe("Given a findDivisors function", () => {
  describe("When it receive a 6 as a parameter", () => {
    test("Then it should return an array with its divisors", () => {
      const numberToFindDivisors: number = 6;
      const expectedLenght = 4;

      const divisors = findDivisorsWithRestZero(numberToFindDivisors);

      expect(divisors).toHaveLength(expectedLenght);
    });
  });
  describe("And when it receive a 0 as a parameter", () => {
    test("Then it should return an empty array", () => {
      const numberToFindDivisors: number = 0;
      const expectedLenght = 0;

      const divisors = findDivisorsWithRestZero(numberToFindDivisors);

      expect(divisors).toHaveLength(expectedLenght);
    });
  });
});
