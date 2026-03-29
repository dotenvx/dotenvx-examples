# PHP + Dotenvx Examples

Super basic examples for encrypting secrets with [Dotenvx](https://dotenvx.com) in PHP.

## Prerequisites

- PHP 8.1+
- Optional: a [Dotenvx](https://dotenvx.com) account

## Run Example

```bash
dotenvx encrypt
dotenvx run -- php index.php
```

## Quick Usage

```php
<?php

echo 'HELLO: ' . (getenv('HELLO') ?: '') . PHP_EOL;
```

## Project Structure

```
php-dotenvx-examples/
├── index.php
└── README.md
```
