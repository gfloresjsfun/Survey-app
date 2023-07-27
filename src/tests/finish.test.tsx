import { render, screen } from "@testing-library/react";
import Finish from "../components/Survey/finish";

describe("App", () => {
  it("renders headline", () => {
    render(<Finish />);
    const headline = screen.getByText(/Survey Finished/i);
    expect(headline).toBeInTheDocument();
  });
});
