// import { dirname } from "path";
// import { fileURLToPath } from "url";
// import { FlatCompat } from "@eslint/eslintrc";
// import tanstackQuery from "@tanstack/eslint-config-query";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const compat = new FlatCompat({
//   baseDirectory: __dirname,
// });

// const eslintConfig = [
//   ...tanstackQuery.config["flat/recommended"],
//   ...compat.extends("next/core-web-vitals", "next/typescript"),
// ];
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import tanstackQuery from "@tanstack/eslint-plugin-query"
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
...tanstackQuery.config["flat/recommended"],
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default eslintConfig;



