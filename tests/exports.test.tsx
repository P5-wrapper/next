import { describe, expect, it } from "vitest";
import { NextReactP5Wrapper } from "@/main";

describe("Exports", () => {
  describe("NextReactP5Wrapper", () => {
    it("Exports the next dynamic wrapper component", () => {
      expect(NextReactP5Wrapper).toBeDefined();
    });
  });
});
