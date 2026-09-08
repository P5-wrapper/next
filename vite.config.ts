import react from "@vitejs/plugin-react";
import { resolve } from "node:path";
import { UserConfig } from "vite";
import dts from "vite-plugin-dts";
import { defineConfig } from "vitest/config";

const root = __dirname;

export default defineConfig((): UserConfig => {
  const isVitest = process.env.VITEST === "true";

  const config: UserConfig = {
    resolve: {
      alias: {
        "@": resolve(root, "src")
      }
    },
    plugins: [
      dts({
        bundleTypes: true,
        tsconfigPath: resolve(root, "tsconfig.json")
      }),
      react()
    ],
    build: {
      lib: {
        entry: resolve(root, "src", "main.tsx"),
        name: "NextReactP5Wrapper",
        fileName: format => (format === "es" ? "main.mjs" : "main.cjs"),
        formats: ["es", "cjs"]
      },
      rollupOptions: {
        external: [
          "react",
          "react-dom",
          "@p5-wrapper/react",
          "next",
          "next/dynamic"
        ],
        output: {
          globals: {
            react: "React",
            "react-dom": "ReactDom",
            "@p5-wrapper/react": "ReactP5Wrapper",
            next: "Next",
            "next/dynamic": "NextDynamic"
          }
        }
      }
    }
  };

  if (isVitest) {
    config.test = {
      globals: true,
      environment: "happy-dom",
      coverage: {
        include: ["src/**/*.{ts,tsx}"],
        reporter: ["text-summary", "html", "clover"]
      },
      setupFiles: resolve(root, "tests", "setup.ts"),
      deps: {
        optimizer: {
          web: {
            include: ["vitest-canvas-mock"]
          }
        }
      }
    };
  }

  return config;
});
