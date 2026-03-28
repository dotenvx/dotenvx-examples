# Node.js + Dotenvx Examples

Super basic examples for encrypting secrets with [Dotenvx](https://dotenvx.com) in Node.js.

## Prerequisites

- Node.js 22+
- Optional: a [Dotenvx](https://dotenvx.com) account

## JavaScript

```bash
cd javascript
npm install
npx dotenvx encrypt
node index.js
```

## TypeScript

```bash
cd typescript
npm install
npx dotenvx encrypt
npx tsx index.ts
```

## Quick Usage

```javascript
require('@dotenvx/dotenvx').config()

console.log('ANTHROPIC_API_KEY:', process.env.ANTHROPIC_API_KEY)
```

## Project Structure

```
nodejs-dotenvx-examples/
├── javascript/
│   ├── index.js
│   └── package.json
├── typescript/
│   ├── index.ts
│   ├── package.json
│   └── tsconfig.json
└── README.md
```
