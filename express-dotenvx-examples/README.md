# Express + Dotenvx Examples

Comprehensive examples for encrypting secrets with [Dotenvx](https://dotenvx.com) using Express (Node.js).

## Prerequisites

- Node.js 22+
- Optional: a [Dotenvx](https://dotenvx.com) account

## Installation

```bash
# Choose your variant
cd javascript  # or typescript

# Install dependencies
npm install

# Copy environment variables
cp ../../.env.example .env

# Encrypt your .env file
npx dotenvx encrypt
```

## Standalone Examples

### JavaScript
```bash
cd javascript
node examples/basic-config.js
```

### TypeScript
```bash
cd typescript
npx tsx examples/basic-config.ts
```

## Express Application

### JavaScript
```bash
cd javascript
npm run dev

# Then in the browser:
open http://localhost:3000
```

### TypeScript
```bash
cd typescript
npm run dev

# Then in the browser:
open http://localhost:3000
```

## Quick Usage

```javascript
require('@dotenvx/dotenvx').config()

console.log("ANTHROPIC_API_KEY:", process.env.ANTHROPIC_API_KEY)
```

## Project Structure

```
express-dotenvx-examples/
├── typescript/
│   ├── examples/                    # standalone examples
│   ├── src/index.ts                 # Express app
│   ├── package.json
│   └── tsconfig.json
├── javascript/
│   ├── examples/                    # standalone examples
│   ├── src/index.js                 # Express app
│   └── package.json
└── README.md
```

## Resources

- [Dotenvx Node.js SDK](https://github.com/dotenvx/dotenvx)
- [Dotenvx Documentation](https://dotenvx.com/docs)
- [CLI Reference](https://dotenvx.com/docs/cli)

## Contributing

See something that could be improved? We welcome contributions! [Open an issue](https://github.com/dotenvx/dotenvx-examples/issues) to report a bug or suggest an improvement, or [submit a pull request](https://github.com/dotenvx/dotenvx-examples/pulls) with your changes.

## License

MIT
