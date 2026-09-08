import { NextReactP5Wrapper } from "@/main";
import { describe, expect, it } from "vitest";

describe("Exports", () => {
  describe("NextReactP5Wrapper", () => {
    it("Exports the next dynamic wrapper component", () => {
      expect(NextReactP5Wrapper).toBeDefined();
    });
  });
});
