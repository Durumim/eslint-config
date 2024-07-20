/*
 * This is a custom ESLint configuration for use with
 * internal (bundled by their consumer) libraries that utilize React.
 */

/** @type {import("eslint").Linter.Config} */
module.exports = {
  // Extends basic and recommended configurations from ESLint, Standard, Import, React, Prettier, React Hooks, and TypeScript.
  extends: [
    "eslint:recommended", // Recommended rules from ESLint.
    "standard", // Standard JavaScript Style Guide rules.
    "plugin:import/warnings", // Rules for handling ES6 imports.
    "plugin:react/recommended", // Recommended rules for React.
    "plugin:prettier/recommended", // Integration between Prettier and ESLint.
    "plugin:react-hooks/recommended", // Recommended rules for React Hooks.
    "plugin:@typescript-eslint/recommended", // Recommended rules for TypeScript.
  ],
  env: {
    es2024: true, // Enables ECMAScript 2024 environment.
    jest: true, // Enables Jest global variables.
    browser: true, // Enables browser global variables.
  },
  parserOptions: {
    ecmaVersion: 'latest', // Sets the latest ECMAScript version.
    sourceType: 'module', // Enables ECMAScript modules.
    ecmaFeatures: {
      jsx: true, // Enables JSX support.
    },
  },
  parser: '@typescript-eslint/parser', // Sets TypeScript parser.
  plugins: [
    'react', // Plugin for React.
    'react-hooks', // Plugin for React Hooks.
    '@typescript-eslint', // Plugin for TypeScript.
    'simple-import-sort', // Plugin for sorting imports.
    'import', // Plugin for handling ES6 imports.
    'unused-imports', // Plugin for detecting and removing unused imports.
    'prettier', // Plugin for integrating Prettier with ESLint.
    'jsx-a11y', // Plugin for improving JSX accessibility.
  ],
  globals: {
    React: true, // Defines React as a global variable.
    JSX: true, // Defines JSX as a global variable.
  },
  settings: {
    react: {
      version: 'detect', // Automatically detects the React version.
    },
    'import/parsers': {
      [require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx', '.d.ts'], // Sets the parser for TypeScript files.
    },
  },
  ignorePatterns: [
    ".*.js", // Ignores hidden JavaScript files.
    "node_modules/", // Ignores the node_modules folder.
    "dist/", // Ignores the dist folder.
  ],
  overrides: [
    { files: ["*.js?(x)", "*.ts?(x)"] }, // Applies configuration to JavaScript and TypeScript files.
  ],
  rules: {
    'unused-imports/no-unused-imports': 'warn', // Warns about unused imports.
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all', // Applies rule to all variables.
        varsIgnorePattern: '^_', // Ignores variables that start with '_'.
        args: 'after-used', // Applies rule to used arguments.
        argsIgnorePattern: '^_', // Ignores arguments that start with '_'.
      },
    ],
    'simple-import-sort/exports': 'error', // Sorts exports.
    'import/first': 'error', // Ensures imports come first.
    'import/newline-after-import': 'error', // Ensures a newline after imports.
    'import/no-duplicates': 'error', // Prevents duplicate imports.
    'import/no-named-as-default': 'off', // Disables the no-named-as-default rule.
    'react/react-in-jsx-scope': 'off', // Disables the react-in-jsx-scope rule.
    'react/prop-types': 'off', // Disables the requirement for prop-types in React components.
    'prettier/prettier': [
      'error',
      {
        tabWidth: 2, // Sets tab width to 2 spaces.
        semi: true, // Requires semicolons at the end of statements.
        arrowParens: 'avoid', // Avoids parentheses for arrow functions with a single argument.
        bracketSameLine: true, // Keeps closing JSX bracket on the same line.
        bracketSpacing: true, // Adds spacing inside object brackets.
        singleQuote: false, // Uses double quotes.
        printWidth: 120, // Sets maximum line length to 120 characters.
        trailingComma: 'all', // Adds trailing commas.
        endOfLine: 'auto', // Sets end of line style automatically.
      },
    ],
    'jsx-a11y/alt-text': [
      'warn',
      {
        elements: ['img'], // Accessibility rules for <img> elements.
        img: ['Image'], // Accessibility rules for Image components.
      },
    ],
    'jsx-a11y/aria-props': 'warn', // Warns about invalid ARIA properties.
    'jsx-a11y/aria-proptypes': 'warn', // Warns about invalid ARIA property types.
    'jsx-a11y/aria-unsupported-elements': 'warn', // Warns about elements that do not support ARIA.
    'jsx-a11y/role-has-required-aria-props': 'warn', // Warns about roles missing required ARIA properties.
    'jsx-a11y/role-supports-aria-props': 'warn', // Warns about unsupported ARIA properties for roles.
    'react/no-unknown-property': 'error', // Prevents using unknown properties in React components.
    '@typescript-eslint/no-namespace': 'off', // Disables the no-namespace rule for TypeScript.
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^react', '^@?\\w'], // Groups React and external packages.
          ['^(@|components)(/.*|$)'], // Groups components.
          ['^\\u0000'], // Groups imports with special characters.
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'], // Groups parent directory imports.
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'], // Groups sibling directory imports.
          ['^.+\\.?(css)$'], // Groups CSS file imports.
        ],
      },
    ],
  },
};
