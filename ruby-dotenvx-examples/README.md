# Ruby + Dotenvx Examples

Super basic examples for encrypting secrets with [Dotenvx](https://dotenvx.com) in Ruby.

## Prerequisites

- Ruby 3.0+
- Optional: a [Dotenvx](https://dotenvx.com) account

## Run Example

```bash
dotenvx encrypt
dotenvx run -- ruby index.rb
```

## Quick Usage

```ruby
puts "HELLO: #{ENV['HELLO']}"
```

## Project Structure

```
ruby-dotenvx-examples/
├── index.rb
└── README.md
```
