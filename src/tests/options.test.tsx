import { fireEvent, render, screen } from "@testing-library/react";
import Survey from "../components/Survey";

describe("App", () => {
  it("renders options", () => {
    render(<Survey />);
    const button = screen.getByText("Start");

    // Click the button
    fireEvent.click(button);
    const options = screen.getAllByTitle("option");
    expect(options).toHaveLength(4);
  });
});
