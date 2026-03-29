# Bun + Dotenvx Examples

Comprehensive examples for encrypting secrets with [Dotenvx](https://dotenvx.com) in Bun.

## Prerequisites

- Bun 1.2+
- Optional: a [Dotenvx](https://dotenvx.com) account

## JavaScript

```bash
cd javascript
bun install
bunx dotenvx encrypt
bun index.js
```

## TypeScript

```bash
cd typescript
bun install
bunx dotenvx encrypt
bun index.ts
```

## Quick Usage

```javascript
require('@dotenvx/dotenvx').config()

console.log('HELLO:', process.env.HELLO)
```

## Project Structure

```
bun-dotenvx-examples/
├── javascript/
│   ├── index.js
│   └── package.json
├── typescript/
│   ├── index.ts
│   ├── package.json
│   └── tsconfig.json
└── README.md
```
