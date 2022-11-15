import useNumbers from "./useNumbers";

describe("Given a useNumbers custom hook", () => {
  describe("When it's invoked with his method checkNumbers and 2 numbers as parameters", () => {
    test("Then it should return an array of numbers", () => {
      const min = 0;
      const max = 5;
      const expectedResult = [0, 1];

      const { checkNumbers } = useNumbers();
      const numbers = checkNumbers(min, max);

      expect(numbers).toStrictEqual(expectedResult);
    });
  });
});
