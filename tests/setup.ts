import "@testing-library/jest-dom/vitest";
import { vi } from "vitest";

// jsdom doesn't implement these browser APIs — stub them for components that
// rely on IntersectionObserver / matchMedia (Reveal, CountUp) or on
// ResizeObserver (ScrollRail, which measures its rail to place the edge fades).
if (typeof window !== "undefined") {
  if (!window.matchMedia) {
    window.matchMedia = vi.fn().mockImplementation((query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));
  }
  class IO {
    observe() {}
    unobserve() {}
    disconnect() {}
    takeRecords() {
      return [];
    }
  }
  // @ts-expect-error minimal test stub
  window.IntersectionObserver = IO;
  // @ts-expect-error minimal test stub
  globalThis.IntersectionObserver = IO;
  class RO {
    observe() {}
    unobserve() {}
    disconnect() {}
  }
  // @ts-expect-error minimal test stub
  window.ResizeObserver ??= RO;
  // @ts-expect-error minimal test stub
  globalThis.ResizeObserver ??= RO;
}
