import { screen, render } from "@testing-library/react";
import Description from "./Description";

describe("Given a Description component", () => {
  describe("When it's instantiated", () => {
    test("Then it should show to paragraph", () => {
      const expectedLenght = 2;

      render(<Description />);
      const paragraphs = screen.queryAllByRole("paragraph");

      expect(paragraphs).toHaveLength(expectedLenght);
    });
  });
});
