import { expect, afterEach } from "vitest";
import { cleanup } from "@testing-library/jest-dom/react";
import matchers from "@testing-library/jest-dom/matchers";

//extends Vitest's expect method with methods from the react testing library
expect.extend(matchers);

//runs a cleanup after each test case (e.g: clearing jsdom)
afterEach(() => {
  cleanup();
});
