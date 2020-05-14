import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import AlertPanel from "../AlertPanel";

describe("<AlertPanel />", () => {
  it("should render text", () => {
    const alertMessage = "Hello World";
    const { getByText } = render(<AlertPanel>{alertMessage}</AlertPanel>);
    expect(getByText(alertMessage)).toBeInTheDocument();
  });
});
