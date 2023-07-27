import { render, screen } from "@testing-library/react";
import Progress from "../components/Progress";

describe("App", () => {
  it("renders total percentage", () => {
    render(<Progress total={10} attempted={1} />);
    const totalPercentage = screen.getByText(/10%/i);
    expect(totalPercentage).toBeInTheDocument();
  });
});
