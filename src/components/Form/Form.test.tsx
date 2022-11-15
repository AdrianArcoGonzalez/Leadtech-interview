import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from "./Form";

describe("Given a Form component", () => {
  describe("When it's instantiated", () => {
    const results: number[] = [];
    const checkResults = () => {};
    const MinInput = "Número mínimo";
    const MaxInput = "Número máximo";
    test("Then it show two inputs where the user can write and change the value", async () => {
      const userWrite = ["2", "10"];
      const expectedValues = [2, 10];

      render(<Form checkResults={results} setCheckResult={checkResults} />);
      const inputMax = screen.getByLabelText(MaxInput);
      const inputMin = screen.getByLabelText(MinInput);
      await userEvent.type(inputMin, userWrite[0]);
      await userEvent.type(inputMax, userWrite[1]);

      expect(inputMin).toHaveValue(expectedValues[0]);
      expect(inputMax).toHaveValue(expectedValues[1]);
    });

    test("And if the value of the minimum input it's over the max input the button must be disabled", () => {
      const userWrite = "100";

      render(<Form checkResults={results} setCheckResult={checkResults} />);
      const inputMin = screen.getByLabelText(MinInput);
      const button = screen.getByRole("button");
      userEvent.type(inputMin, userWrite);

      expect(button).toBeDisabled();
    });
  });
});
