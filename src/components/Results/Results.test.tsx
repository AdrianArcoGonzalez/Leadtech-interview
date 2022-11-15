import { render, screen } from "@testing-library/react";
import Results from "./Results";

describe("Given a Results component", () => {
  describe("When it's instantiated with a list of numbers", () => {
    test("Then it should show the list", () => {
      const resultProps = [1, 2, 3];

      render(<Results results={resultProps} />);
      const items = screen.getAllByRole("listitem");

      expect(items).toHaveLength(resultProps.length);
    });

    test("And if it receive an empty array it should show the default text", () => {
      const resultProps: number[] = [];
      const text = "There isn't any number found";

      render(<Results results={resultProps} />);
      const textFound = screen.getByText(text);
      expect(textFound).toBeInTheDocument();
    });
  });
});
