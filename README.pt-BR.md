# @durumim/eslint-config

Configuração compartilhada do ESLint para projetos Durumim UI.

## Descrição

Este pacote fornece uma configuração compartilhada do ESLint para projetos que utilizam React e TypeScript. Inclui regras e plugins para garantir a qualidade e consistência do código em todos os projetos Durumim UI.

## Instalação

Primeiro, instale o pacote e suas dependências peer:

```
npm install --save-dev @durumim/eslint-config eslint typescript
```

Ou, se você estiver usando yarn:

```
yarn add --dev @durumim/eslint-config eslint typescript
```

Ou, se você estiver usando pnpm:

```
pnpm add --D @durumim/eslint-config eslint typescript
```

## Uso

Para usar esta configuração do ESLint em seu projeto, crie um arquivo `.eslintrc.js` na raiz do seu projeto e estenda a configuração compartilhada:

```
module.exports = {
  extends: "@durumim/eslint-config/react"
};
```

## Explicação das Dependências

- **@typescript-eslint/eslint-plugin**: Fornece regras específicas de linting para TypeScript.
- **@typescript-eslint/parser**: Faz o parsing do código TypeScript para o ESLint.
- **eslint**: A biblioteca principal do ESLint.
- **eslint-config-prettier**: Desativa regras do ESLint que podem conflitar com o Prettier.
- **eslint-plugin-import**: Faz o linting da sintaxe de import/export do ES6 para evitar problemas.
- **eslint-plugin-jsx-a11y**: Faz o linting de regras de acessibilidade para elementos JSX.
- **eslint-plugin-react**: Fornece regras específicas de linting para React.
- **eslint-plugin-react-hooks**: Impõe regras de hooks para React.
- **prettier**: Formatador de código para garantir um estilo de código consistente.
- **eslint-plugin-simple-import-sort**: Ordena declarações de importação para melhor legibilidade.
- **eslint-plugin-unused-imports**: Remove declarações de importação não utilizadas.
- **eslint-config-standard**: Configuração do estilo de JavaScript padrão.

## Configuração Detalhada

A configuração do ESLint fornecida inclui:

### extends

- **eslint:recommended**: Regras recomendadas pelo ESLint.
- **standard**: Regras do Guia de Estilo JavaScript Standard.
- **plugin:import/warnings**: Regras para lidar com importações ES6.
- **plugin:react/recommended**: Regras recomendadas para React.
- **plugin:prettier/recommended**: Integração entre Prettier e ESLint.
- **plugin:react-hooks/recommended**: Regras recomendadas para React Hooks.
- **plugin:@typescript-eslint/recommended**: Regras recomendadas para TypeScript.

### env

- **es2024**: Habilita o ambiente ECMAScript 2024.
- **jest**: Habilita variáveis globais do Jest.
- **browser**: Habilita variáveis globais do navegador.

### parserOptions

- **ecmaVersion**: Define a versão mais recente do ECMAScript.
- **sourceType**: Habilita módulos ECMAScript.
- **ecmaFeatures**: Habilita suporte a JSX.

### parser

- **@typescript-eslint/parser**: Define o parser do TypeScript.

### plugins

- **react**: Plugin para React.
- **react-hooks**: Plugin para React Hooks.
- **@typescript-eslint**: Plugin para TypeScript.
- **simple-import-sort**: Plugin para ordenar importações.
- **import**: Plugin para lidar com importações ES6.
- **unused-imports**: Plugin para detectar e remover importações não utilizadas.
- **prettier**: Plugin para integrar Prettier com ESLint.
- **jsx-a11y**: Plugin para melhorar a acessibilidade do JSX.

### globals

- **React**: Define React como uma variável global.
- **JSX**: Define JSX como uma variável global.

### settings

- **react.version**: Detecta automaticamente a versão do React.
- **import/parsers**: Define o parser para arquivos TypeScript.

### ignorePatterns

- **.*.js**: Ignora arquivos JavaScript ocultos.
- **node_modules/**: Ignora a pasta node_modules.
- **dist/**: Ignora a pasta dist.

### rules

- **unused-imports/no-unused-imports**: Gera um aviso sobre importações não utilizadas.
- **unused-imports/no-unused-vars**: Gera um aviso sobre variáveis e argumentos não utilizados.
- **simple-import-sort/exports**: Ordena exportações.
- **import/first**: Garante que as importações venham primeiro.
- **import/newline-after-import**: Garante uma nova linha após as importações.
- **import/no-duplicates**: Evita importações duplicadas.
- **import/no-named-as-default**: Desativa a regra no-named-as-default.
- **react/react-in-jsx-scope**: Desativa a regra react-in-jsx-scope.
- **react/prop-types**: Desativa a exigência de prop-types em componentes React.
- **prettier/prettier**: Impõe as regras de formatação do Prettier.
- **jsx-a11y/alt-text**: Impõe regras de acessibilidade para elementos <img>.
- **jsx-a11y/aria-props**: Gera um aviso sobre propriedades ARIA inválidas.
- **jsx-a11y/aria-proptypes**: Gera um aviso sobre tipos de propriedades ARIA inválidas.
- **jsx-a11y/aria-unsupported-elements**: Gera um aviso sobre elementos que não suportam ARIA.
- **jsx-a11y/role-has-required-aria-props**: Gera um aviso sobre funções que não possuem propriedades ARIA obrigatórias.
- **jsx-a11y/role-supports-aria-props**: Gera um aviso sobre propriedades ARIA não suportadas por funções específicas.
- **react/no-unknown-property**: Impede o uso de propriedades desconhecidas em componentes React.
- **@typescript-eslint/no-namespace**: Desativa a regra no-namespace do TypeScript.
- **simple-import-sort/imports**: Ordena importações em grupos para melhor legibilidade.

## Contribuindo

Sinta-se à vontade para abrir um problema ou enviar um pull request se tiver alguma sugestão ou melhoria.

## Licença

Este projeto é licenciado sob a Licença MIT.
