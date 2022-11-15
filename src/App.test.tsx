import TestRenderer from "react-test-renderer";
import App from "./App";

describe("Given an app component", () => {
  describe("When it's instantiated", () => {
    test("Then it should match with the screenshot", () => {
      const appJSX = TestRenderer.create(<App />);

      expect(appJSX).toMatchSnapshot();
    });
  });
});
