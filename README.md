![@P5-wrapper/next](https://socialify.git.ci/p5-wrapper/next/image?description=1&font=Rokkitt&forks=1&issues=1&language=1&logo=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F8%2F8e%2FNextjs-logo.svg&name=1&owner=1&pattern=Floating%20Cogs&pulls=1&stargazers=1&theme=Auto)

# @P5-wrapper/next

A [Next.js](https://nextjs.org) specific wrapper for
[@p5-wrapper/react](https://github.com/P5-wrapper/react), a component to
integrate [P5.js](https://p5js.org/) sketches into [React](https://react.dev/)
apps.

> **Note:**
>
> This library simply re-exports the
> [@p5-wrapper/react component](https://github.com/P5-wrapper/react) as a
> Next.js dynamic component using
> [`next/dynamic`](https://nextjs.org/docs/app/api-reference/components/dynamic)
> with server-side rendering disabled. Nothing more.
>
> For more in-depth information on the base component, check the documentation
> via [the @p5-wrapper/react docs](https://github.com/P5-wrapper/react).

## Installation

`@p5-wrapper/react`, `p5`, `next`, `react` and `react-dom` are peer dependencies
and must be installed in your project:

```shell
[npm|yarn|pnpm] [install|add] @p5-wrapper/next @p5-wrapper/react p5 next react react-dom
```

## Usage

To use the component in your Next.js project, simply import it like so:

```tsx
import { NextReactP5Wrapper } from "@p5-wrapper/next";
import { type Sketch } from "@p5-wrapper/react";
import React from "react";

const sketch: Sketch = p5 => {
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

All props supported by [`P5Canvas`](https://github.com/P5-wrapper/react#props)
can be passed straight through — `NextReactP5Wrapper` forwards everything to the
underlying component. See the
[@p5-wrapper/react documentation](https://github.com/P5-wrapper/react) for the
full list of props, custom updaters, fallback UIs, and error and loading
handling.

## Why dynamic with `ssr: false`?

p5 sketches manipulate the DOM and browser APIs directly, which do not exist
during server-side rendering. The wrapper therefore loads `P5Canvas` client side
only, which is also what
[Next.js recommends](https://nextjs.org/docs/app/api-reference/components/dynamic#skipping-ssr)
for browser-only libraries.

## Development

The source code for the component is in the `src` directory. You will need
[Node.js](https://nodejs.org) and [pnpm](https://pnpm.io) — the exact versions
are pinned in [`package.json`](package.json).

To run the Vite dev tooling:

```sh
pnpm dev
```

### Contributing

Before opening a pull request, make sure your changes pass every quality gate:

```sh
pnpm integrate
```

This runs the same checks as CI — formatting, linting, tests, and builds. Pull
requests are reviewed against the
[pull request template](.github/PULL_REQUEST_TEMPLATE.md) and must keep the
public API in `src/main.tsx` backwards compatible. Commits follow the
[conventional commit](https://www.conventionalcommits.org) style (`feat:`,
`fix:`, `chore:`, etc.) — emoji prefixes are only used by automated pull
requests.

The `typescript` dependency is pinned to `6.0.3` on purpose:
[typescript-eslint](https://typescript-eslint.io) does not support TypeScript 7
yet — the Go-based v7 is not feature compatible with the v6 API it builds on,
and upstream support cannot land before TypeScript 7.1.x. It is tracked in
[typescript-eslint#10940](https://github.com/typescript-eslint/typescript-eslint/issues/10940).
Please do not widen the pin in pull requests — we wait for full feature parity
before migrating to v7, no half measures.

#### AI-assisted contributions

Contributions developed with the assistance of an AI agent are welcome, but you
— the developer — are always the ultimately responsible individual for your
contributions. AI agents cannot author or certify them. When AI assistance is
used:

- Commit with `--signoff` (`git commit -s`) so that you certify the
  [Developer Certificate of Origin](https://developercertificate.org/) for the
  work yourself
- Optionally credit the agent with an `Assisted-by: LLM` trailer in the commit
  message, as
  [recommended by the Linux kernel team](https://docs.kernel.org/process/coding-assistants.html)
- Ensure all work adheres to the [MIT licence](LICENSE)

See [`AGENTS.md`](AGENTS.md) for the full set of rules agents follow in this
repository.
