import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders ui", () => {
  render(<App />);
  const linkElement = screen.getByText(/create account/i);
  expect(linkElement).toBeInTheDocument();
});
