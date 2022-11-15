import getRangeNumbers from "./getRangeNumbers";

describe("Given a GetRangeNumbers function", () => {
  describe("When it receive 0 and 6 numbers as a parameter", () => {
    test("Then it should return an array of numbers with length 7", () => {
      const min: number = 0;
      const max: number = 6;
      const expectedLenght = 7;

      const rangedNumbers = getRangeNumbers(min, max);

      expect(rangedNumbers).toHaveLength(expectedLenght);
    });
  });
});
