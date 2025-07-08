import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  {
    rules: {
      // ✅ Suppress unused import/variable unless it starts without "_"
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],

      // ✅ Disable React exhaustive deps rule
      "react-hooks/exhaustive-deps": "off",

      // ✅ Allow JSX entities like apostrophes
      "react/no-unescaped-entities": "off",

      // ✅ Allow using <img> instead of next/image
      "@next/next/no-img-element": "off",

      // ✅ Allow hooks like useAnimation inside callbacks (risky but intentional)
      "react-hooks/rules-of-hooks": "off",
    },
  },
];

export default eslintConfig;
