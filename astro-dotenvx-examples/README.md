# Astro + Dotenvx Examples

Examples for encrypting secrets with [Dotenvx](https://dotenvx.com) in Astro projects.

## Prerequisites

- Node.js 22+
- Optional: a [Dotenvx](https://dotenvx.com) account

## Installation

```bash
# Choose your variant
cd javascript  # or typescript

# Install dependencies
npm install

# Encrypt your .env file
npx dotenvx encrypt
```

## Astro Application

### JavaScript
```bash
cd javascript
npm run dev

# Then in the browser:
open http://localhost:4321/api
```

### TypeScript
```bash
cd typescript
npm run dev

# Then in the browser:
open http://localhost:4321/api
```

## Project Structure

```
astro-dotenvx-examples/
├── .gitignore
├── README.md
├── javascript/
│   ├── astro.config.mjs
│   ├── package.json
│   └── src/
│       └── pages/
│           └── api.js
├── typescript/
│   ├── astro.config.mjs
│   ├── package.json
│   ├── tsconfig.json
│   └── src/
│       └── pages/
│           └── api.ts
```

## Resources

- [Dotenvx Node.js SDK](https://github.com/dotenvx/dotenvx)
- [Dotenvx Documentation](https://dotenvx.com/docs)
- [CLI Reference](https://dotenvx.com/docs/cli)

## License

MIT
