# @P5-wrapper/next

![@P5-wrapper/next](https://socialify.git.ci/p5-wrapper/next/image?description=1&font=Rokkitt&forks=1&issues=1&language=1&logo=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F8%2F8e%2FNextjs-logo.svg&name=1&owner=1&pattern=Floating%20Cogs&pulls=1&stargazers=1&theme=Auto)

> **Note:**
>
> This library simply re-exports the [@P5-wrapper/react (react-p5-wrapper) component](https://github.com/P5-wrapper/react) as a NextJS dynamic component. Nothing more.
>
> For more in-depth information on the base component, check the documentation via [the @P5-wrapper/react (react-p5-wrapper) docs](https://github.com/P5-wrapper/react).

## Installation

To install the component, run the following:

```shell
[npm|yarn|pnpm] [install|add] @p5-wrapper/next @p5-wrapper/react
```

## Usage

Then to use the component in your NextJS project you can simply import like so:

```tsx
import React from "react";
import { type Sketch } from "@p5-wrapper/react";
import { NextReactP5Wrapper } from "@p5-wrapper/next";

const sketch: Sketch = (p5) => {
  p5.setup = () => p5.createCanvas(600, 400, p5.WEBGL);

  p5.draw = () => {
    p5.background(250);
    p5.normalMaterial();
    p5.push();
    p5.rotateZ(p5.frameCount * 0.01);
    p5.rotateX(p5.frameCount * 0.01);
    p5.rotateY(p5.frameCount * 0.01);
    p5.plane(100);
    p5.pop();
  };
};

export default function Page() {
  return <NextReactP5Wrapper sketch={sketch} />;
}
```
