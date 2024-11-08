import { render, screen } from "@testing-library/react";
import TextComponentOne from "./TextComponentOne";
import React from "react";

// Test case to check if the text is rendered correctly
test("Renders Textcomponent Correctly", () => {
  const text = "Hello, World!";
  render(<TextComponentOne text={text} />);

  const heading = screen.getByText(text);
  expect(heading).toBeInTheDocument();
  expect(heading.tagName).toBe("H2");
});

// Test case to check if additionalClassName is applied correctly
test("applies additional class name", () => {
  const text = "Styled Text";
  const additionalClassName = "text-blue-500";
  render(
    <TextComponentOne
      text={text}
      additionalClassName={additionalClassName}
    />
  );

  const heading = screen.getByText(text);
  expect(heading).toHaveClass(additionalClassName);
});
