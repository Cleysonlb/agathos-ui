import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import Example from "../Example";

describe("<Example />", () => {
  it("should render Hello World text", () => {
    const titleText = "Hello World";
    const { getByText } = render(<Example title={titleText} />);
    const titleElement = getByText(titleText);
    expect(titleElement).toBeInTheDocument();
  });
});
