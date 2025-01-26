import arvinConfig from "eslint-config-arvin";
import arvinReactConfig from "eslint-config-arvin/react.js";
import arvinViteConfig from "eslint-config-arvin/vite.js";
import arvinVitestConfig from "eslint-config-arvin/vitest.js";

export default [
  ...arvinConfig,
  ...arvinReactConfig,
  ...arvinViteConfig,
  ...arvinVitestConfig,
  {
    rules: {
      "@typescript-eslint/no-misused-promises": ["off"],
    },
  },
];
