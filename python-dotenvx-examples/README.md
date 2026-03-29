# Python + Dotenvx Examples

Comprehensive examples for encrypting secrets with [Dotenvx](https://dotenvx.com) in Python.

## Prerequisites

- Python 3.10+
- Optional: a [Dotenvx](https://dotenvx.com) account

## Run Example

```bash
dotenvx encrypt
dotenvx run -- python main.py
```

## Quick Usage

```python
import os

print(f"HELLO: {os.getenv('HELLO')}")
```

## Project Structure

```
python-dotenvx-examples/
├── main.py
└── README.md
```
