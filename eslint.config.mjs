import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: globals.browser, // Define entorno navegador
      ecmaVersion: "latest",    // Última versión de ECMAScript
      sourceType: "module",     // Habilita el uso de import/export
    },
    rules: {
      "semi": ["error", "always"],         // Exige punto y coma
      "quotes": ["error", "double"],       // Fuerza comillas dobles
      "no-unused-vars": "warn",            // Advierte sobre variables no usadas
      "eqeqeq": ["error", "always"],       // Exige triple igual ===
    },
  },
  pluginJs.configs.recommended,
];
