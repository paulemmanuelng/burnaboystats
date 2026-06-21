import { render, screen } from "@testing-library/react";

vi.mock("next/navigation", () => ({ usePathname: () => "/music" }));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import Nav from "../../app/components/Nav";

describe("Nav", () => {
  it("renders all nav items and marks the active page with aria-current", () => {
    render(<Nav />);
    expect(screen.getByText("Certifications")).toBeInTheDocument();
    expect(screen.getByText("Records")).toBeInTheDocument();
    const active = screen.getByText("Music").closest("a");
    expect(active).toHaveAttribute("aria-current", "page");
  });
});
