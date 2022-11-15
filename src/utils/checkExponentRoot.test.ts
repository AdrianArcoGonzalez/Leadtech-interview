import checkExponentRoot from "./checkExponentRoot";

describe("Given a checkExponentRoot", () => {
  describe("When it receive a number", () => {
    test("Then it should return true if the square root is integrer", () => {
      const number = 4;

      const check = checkExponentRoot(number);

      expect(check).toBe(true);
    });

    test("Then it should return false if the square root is not integrer", () => {
      const number = 5;

      const check = checkExponentRoot(number);

      expect(check).toBe(false);
    });
  });
});
