import { render, screen } from "@testing-library/react";
import Start from "../components/Survey/start";

describe("App", () => {
  it("renders headline", () => {
    render(<Start onStart={() => {}} />);
    const headline = screen.getByText(/Begin Survey/i);
    expect(headline).toBeInTheDocument();
  });
});
