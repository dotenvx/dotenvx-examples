# Rust + Dotenvx Examples

Super basic examples for encrypting secrets with [Dotenvx](https://dotenvx.com) in Rust.

## Prerequisites

- Rust 1.80+
- Optional: a [Dotenvx](https://dotenvx.com) account

## Run Example

```bash
dotenvx encrypt
dotenvx run -- cargo run
```

## Quick Usage

```rust
use std::env;

fn main() {
    let hello = env::var("HELLO").unwrap_or_default();
    println!("HELLO: {}", hello);
}
```

## Project Structure

```
rust-dotenvx-examples/
├── .env
├── Cargo.toml
├── README.md
└── src/
    └── main.rs
```
