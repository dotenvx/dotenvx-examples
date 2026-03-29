# Next.js + Dotenvx Examples

Examples for encrypting secrets with [Dotenvx](https://dotenvx.com) in Next.js projects.

## Prerequisites

- Node.js 22+
- Optional: a [Dotenvx](https://dotenvx.com) account

## Installation

```bash
cd javascript

# Install dependencies
npm install

# Encrypt your .env file
npx dotenvx encrypt
```

## Next.js Application

### JavaScript
```bash
cd javascript
npm run dev

# Then in the browser:
open http://localhost:3000/api
```

## Project Structure

```
nextjs-dotenvx-examples/
├── README.md
└── javascript/
    ├── package.json
    ├── src/
    │   ├── app/
    │   │   └── api/
    │   │       └── route.js
    │   └── instrumentation.js
    └── next.config.mjs
```

## Resources

- [Dotenvx Node.js SDK](https://github.com/dotenvx/dotenvx)
- [Dotenvx Documentation](https://dotenvx.com/docs)
- [CLI Reference](https://dotenvx.com/docs/cli)

## License

MIT
