import { NextReactP5Wrapper } from "@/main";
import { type Sketch } from "@p5-wrapper/react";
import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

const sketch: Sketch = p5 => {
  p5.setup = () => {
    p5.createCanvas(600, 400);
  };
};

describe("NextReactP5Wrapper", () => {
  it("Renders the underlying P5Canvas once the dynamic import resolves", async () => {
    const { container, findByTestId } = render(
      <NextReactP5Wrapper sketch={sketch} />
    );

    const canvasContainer = await findByTestId("canvas-container");

    expect(canvasContainer).toBeInTheDocument();
    expect(container.querySelector("canvas")).toBeInstanceOf(HTMLCanvasElement);
  });
});
