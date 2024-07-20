# @durumim/eslint-config

Shared ESLint configuration for Durumim UI projects.

## Description

This package provides a shared ESLint configuration for projects that utilize React and TypeScript. It includes rules and plugins to ensure code quality and consistency across all Durumim UI projects.

## Installation

First, install the package and its peer dependencies:

```
npm install --save-dev @durumim/eslint-config eslint typescript
```

Or, if you are using yarn:

```
yarn add --dev @durumim/eslint-config eslint typescript
```

Or, if you are using pnpm:

```
pnpm add --D @durumim/eslint-config eslint typescript
```

## Usage

To use this ESLint configuration in your project, create a `.eslintrc.js` file in the root of your project and extend the shared configuration:

```
module.exports = {
  extends: "@durumim/eslint-config/react"
};
```

## Explanation of Dependencies

- **@typescript-eslint/eslint-plugin**: Provides TypeScript-specific linting rules.
- **@typescript-eslint/parser**: Parses TypeScript code for ESLint.
- **eslint**: The core ESLint library.
- **eslint-config-prettier**: Disables ESLint rules that might conflict with Prettier.
- **eslint-plugin-import**: Lints ES6 import/export syntax to prevent issues.
- **eslint-plugin-jsx-a11y**: Lints accessibility rules for JSX elements.
- **eslint-plugin-react**: Provides React-specific linting rules.
- **eslint-plugin-react-hooks**: Enforces rules of hooks for React.
- **prettier**: Code formatter to ensure consistent code style.
- **eslint-plugin-simple-import-sort**: Sorts import statements for better readability.
- **eslint-plugin-unused-imports**: Removes unused import statements.
- **eslint-config-standard**: JavaScript Standard Style configuration.

## Detailed Configuration

The provided ESLint configuration includes:

### extends

- **eslint:recommended**: Recommended rules from ESLint.
- **standard**: Standard JavaScript Style Guide rules.
- **plugin:import/warnings**: Rules for handling ES6 imports.
- **plugin:react/recommended**: Recommended rules for React.
- **plugin:prettier/recommended**: Integration between Prettier and ESLint.
- **plugin:react-hooks/recommended**: Recommended rules for React Hooks.
- **plugin:@typescript-eslint/recommended**: Recommended rules for TypeScript.

### env

- **es2024**: Enables ECMAScript 2024 environment.
- **jest**: Enables Jest global variables.
- **browser**: Enables browser global variables.

### parserOptions

- **ecmaVersion**: Sets the latest ECMAScript version.
- **sourceType**: Enables ECMAScript modules.
- **ecmaFeatures**: Enables JSX support.

### parser

- **@typescript-eslint/parser**: Sets TypeScript parser.

### plugins

- **react**: Plugin for React.
- **react-hooks**: Plugin for React Hooks.
- **@typescript-eslint**: Plugin for TypeScript.
- **simple-import-sort**: Plugin for sorting imports.
- **import**: Plugin for handling ES6 imports.
- **unused-imports**: Plugin for detecting and removing unused imports.
- **prettier**: Plugin for integrating Prettier with ESLint.
- **jsx-a11y**: Plugin for improving JSX accessibility.

### globals

- **React**: Defines React as a global variable.
- **JSX**: Defines JSX as a global variable.

### settings

- **react.version**: Automatically detects the React version.
- **import/parsers**: Sets the parser for TypeScript files.

### ignorePatterns

- **.*.js**: Ignores hidden JavaScript files.
- **node_modules/**: Ignores the node_modules folder.
- **dist/**: Ignores the dist folder.

### rules

- **unused-imports/no-unused-imports**: Warns about unused imports.
- **unused-imports/no-unused-vars**: Warns about unused variables and arguments.
- **simple-import-sort/exports**: Sorts exports.
- **import/first**: Ensures imports come first.
- **import/newline-after-import**: Ensures a newline after imports.
- **import/no-duplicates**: Prevents duplicate imports.
- **import/no-named-as-default**: Disables the no-named-as-default rule.
- **react/react-in-jsx-scope**: Disables the react-in-jsx-scope rule.
- **react/prop-types**: Disables the requirement for prop-types in React components.
- **prettier/prettier**: Enforces Prettier formatting rules.
- **jsx-a11y/alt-text**: Enforces accessibility rules for <img> elements.
- **jsx-a11y/aria-props**: Warns about invalid ARIA properties.
- **jsx-a11y/aria-proptypes**: Warns about invalid ARIA property types.
- **jsx-a11y/aria-unsupported-elements**: Warns about elements that do not support ARIA.
- **jsx-a11y/role-has-required-aria-props**: Warns about roles missing required ARIA properties.
- **jsx-a11y/role-supports-aria-props**: Warns about unsupported ARIA properties for roles.
- **react/no-unknown-property**: Prevents using unknown properties in React components.
- **@typescript-eslint/no-namespace**: Disables the no-namespace rule for TypeScript.
- **simple-import-sort/imports**: Sorts imports into groups for better readability.

## Contributing

Feel free to open an issue or submit a pull request if you have any suggestions or improvements.

## License

This project is licensed under the MIT License.
