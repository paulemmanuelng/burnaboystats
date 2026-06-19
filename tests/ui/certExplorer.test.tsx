import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CertExplorer from "../../app/components/CertExplorer";
import { albums, singles, features, COUNTRIES } from "../../app/data/certifications";

describe("CertExplorer", () => {
  it("renders releases and filters them by tier", async () => {
    render(
      <CertExplorer albums={albums} singles={singles} features={features} countries={COUNTRIES} />
    );

    // Both a Diamond release and a non-Diamond release are shown initially.
    expect(screen.getByText("On the Low")).toBeInTheDocument(); // 🇫🇷 Diamond
    expect(screen.getByText("Anybody")).toBeInTheDocument(); // no Diamond

    await userEvent.click(screen.getByRole("button", { name: "Diamond" }));

    // After filtering to Diamond, the non-Diamond release drops out.
    expect(screen.getByText("On the Low")).toBeInTheDocument();
    expect(screen.queryByText("Anybody")).not.toBeInTheDocument();
  });
});
