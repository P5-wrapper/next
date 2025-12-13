import dynamic from "next/dynamic";

export const NextReactP5Wrapper = dynamic(
  async () => (await import("@p5-wrapper/react")).P5Canvas,
  { ssr: false },
);
