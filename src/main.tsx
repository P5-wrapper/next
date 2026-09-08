import { type P5CanvasProps } from "@p5-wrapper/react";
import dynamic from "next/dynamic";
import { type ComponentType } from "react";

export const NextReactP5Wrapper: ComponentType<P5CanvasProps> = dynamic(
  async () => (await import("@p5-wrapper/react")).P5Canvas,
  { ssr: false }
);
