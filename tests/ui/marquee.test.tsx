import { render, screen } from "@testing-library/react";
import Marquee from "../../app/components/Marquee";

describe("Marquee", () => {
  it("renders the provided items", () => {
    render(<Marquee items={["African Giant", "Grammy Winner"]} />);
    expect(screen.getAllByText("African Giant").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Grammy Winner").length).toBeGreaterThan(0);
  });
});
